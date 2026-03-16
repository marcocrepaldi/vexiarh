import tls from "tls";
import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const SMTP_TIMEOUT_MS = 10000;

const htmlResponse = (body: string, status = 200) =>
  new NextResponse(body, {
    status,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      Allow: "POST",
      "Cache-Control": "no-store",
    },
  });

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const whatsappHref = (name: string, email: string, phone: string, message: string) => {
  const text = [
    "Ola, quero continuar o contato com a VexiaRH pelo WhatsApp.",
    "",
    `Nome: ${name}`,
    `E-mail: ${email}`,
    `WhatsApp: ${phone || "(nao informado)"}`,
    "",
    "Principal desafio:",
    message,
  ].join("\n");

  return `https://wa.me/5511985266582?text=${encodeURIComponent(text)}`;
};

const getEhloHost = () => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!siteUrl) return "vexiarh.com.br";

  try {
    return new URL(siteUrl).hostname || "vexiarh.com.br";
  } catch {
    return "vexiarh.com.br";
  }
};

const smtpConfig = () => {
  const host = (process.env.SMTP_HOST || "smtp0001.neo.space").trim();
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS;
  const from = (process.env.SMTP_FROM || user || "").trim();
  const toRaw = (process.env.SMTP_TO || user || "").trim();

  const to = toRaw
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  if (!host || !Number.isFinite(port) || !user || !pass || !from || to.length === 0) {
    throw new Error("SMTP environment variables are missing or invalid");
  }

  return { host, port, user, pass, from, to };
};

const waitForSecureConnect = (socket: tls.TLSSocket) =>
  new Promise<void>((resolve, reject) => {
    const cleanup = () => {
      socket.off("secureConnect", onConnect);
      socket.off("error", onError);
      socket.off("timeout", onTimeout);
    };

    const onConnect = () => {
      cleanup();
      resolve();
    };

    const onError = (error: Error) => {
      cleanup();
      reject(error);
    };

    const onTimeout = () => {
      cleanup();
      reject(new Error("SMTP timeout while connecting"));
    };

    socket.setTimeout(SMTP_TIMEOUT_MS);
    socket.once("secureConnect", onConnect);
    socket.once("error", onError);
    socket.once("timeout", onTimeout);
  });

const connectSocket = async (host: string, port: number) => {
  const socket = tls.connect({
    host,
    port,
    servername: host,
    minVersion: "TLSv1.2",
  });

  await waitForSecureConnect(socket);
  return socket;
};

const readResponse = (socket: tls.TLSSocket) =>
  new Promise<string>((resolve, reject) => {
    let buffer = "";

    const cleanup = () => {
      socket.off("data", onData);
      socket.off("error", onError);
      socket.off("close", onClose);
      socket.off("timeout", onTimeout);
    };

    const finalize = () => {
      const lines = buffer.split("\r\n").filter(Boolean);
      const lastLine = lines.at(-1);

      if (lastLine && /^\d{3} /.test(lastLine)) {
        cleanup();
        resolve(buffer);
      }
    };

    const onData = (chunk: Buffer) => {
      buffer += chunk.toString("utf8");
      finalize();
    };

    const onError = (error: Error) => {
      cleanup();
      reject(error);
    };

    const onClose = () => {
      cleanup();
      reject(new Error("SMTP connection closed"));
    };

    const onTimeout = () => {
      cleanup();
      reject(new Error("SMTP timeout while waiting for response"));
    };

    socket.setTimeout(SMTP_TIMEOUT_MS);
    socket.on("data", onData);
    socket.once("error", onError);
    socket.once("close", onClose);
    socket.once("timeout", onTimeout);
  });

const expectOneOf = async (socket: tls.TLSSocket, codes: number[]) => {
  const response = await readResponse(socket);
  const ok = codes.some((code) => response.startsWith(String(code)));

  if (!ok) {
    throw new Error(`SMTP unexpected response ${response.trim()}`);
  }

  return response;
};

const write = (socket: tls.TLSSocket, line: string) => socket.write(line);

const b64 = (value: string) => Buffer.from(value, "utf8").toString("base64");

const encodeHeaderUtf8 = (value: string) =>
  `=?UTF-8?B?${Buffer.from(value, "utf8").toString("base64")}?=`;

const normalizeBodyLine = (line: string) => (line.startsWith(".") ? `.${line}` : line);

const normalizeMessageBody = (text: string) =>
  text
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .split("\n")
    .map(normalizeBodyLine)
    .join("\r\n");

const buildMailBody = ({
  from,
  to,
  replyTo,
  subject,
  text,
}: {
  from: string;
  to: string[];
  replyTo: string;
  subject: string;
  text: string;
}) => {
  const domain = from.split("@")[1] || "localhost";
  const messageId = `<${Date.now()}.${Math.random().toString(16).slice(2)}@${domain}>`;

  return [
    `From: ${from}`,
    `To: ${to.join(", ")}`,
    `Reply-To: ${replyTo}`,
    `Subject: ${encodeHeaderUtf8(subject)}`,
    `Date: ${new Date().toUTCString()}`,
    `Message-ID: ${messageId}`,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=utf-8",
    "Content-Transfer-Encoding: 8bit",
    "",
    normalizeMessageBody(text),
    ".",
  ].join("\r\n");
};

const sendSmtpMail = async ({
  subject,
  text,
  replyTo,
}: {
  subject: string;
  text: string;
  replyTo: string;
}) => {
  const { host, port, user, pass, from, to } = smtpConfig();
  const ehloHost = getEhloHost();

  if (port !== 465) {
    throw new Error("This implementation supports only SMTPS on port 465");
  }

  let socket: tls.TLSSocket | null = null;

  try {
    socket = await connectSocket(host, port);

    await expectOneOf(socket, [220]);

    write(socket, `EHLO ${ehloHost}\r\n`);
    await expectOneOf(socket, [250]);

    write(socket, "AUTH LOGIN\r\n");
    await expectOneOf(socket, [334]);

    write(socket, `${b64(user)}\r\n`);
    await expectOneOf(socket, [334]);

    write(socket, `${b64(pass)}\r\n`);
    await expectOneOf(socket, [235]);

    write(socket, `MAIL FROM:<${from}>\r\n`);
    await expectOneOf(socket, [250]);

    for (const recipient of to) {
      write(socket, `RCPT TO:<${recipient}>\r\n`);
      await expectOneOf(socket, [250, 251]);
    }

    write(socket, "DATA\r\n");
    await expectOneOf(socket, [354]);

    const body = buildMailBody({ from, to, replyTo, subject, text });
    write(socket, `${body}\r\n`);
    await expectOneOf(socket, [250]);

    write(socket, "QUIT\r\n");
    await expectOneOf(socket, [221]);

    socket.end();
  } catch (error) {
    socket?.destroy();
    throw error;
  }
};

const parsePayload = async (req: Request): Promise<ContactPayload> => {
  const ct = req.headers.get("content-type") || "";

  if (ct.includes("application/json")) {
    try {
      return (await req.json()) as ContactPayload;
    } catch {
      throw new Error("Invalid JSON payload");
    }
  }

  if (
    ct.includes("multipart/form-data") ||
    ct.includes("application/x-www-form-urlencoded") ||
    ct === ""
  ) {
    const form = await req.formData();

    return {
      name: (form.get("name") || "").toString().trim(),
      email: (form.get("email") || "").toString().trim(),
      phone: (form.get("phone") || "").toString().trim(),
      message: (form.get("message") || "").toString().trim(),
    };
  }

  throw new Error("Unsupported content type");
};

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function POST(req: Request) {
  let payload: ContactPayload;

  try {
    payload = await parsePayload(req);
  } catch (error) {
    return htmlResponse(
      `<p style="color:#EA4335">${
        error instanceof Error && error.message === "Unsupported content type"
          ? "Tipo de envio nao suportado."
          : "Nao foi possivel ler os dados do formulario."
      }</p>`,
      400,
    );
  }

  const name = (payload.name || "").trim();
  const email = (payload.email || "").trim();
  const phone = (payload.phone || "").trim();
  const message = (payload.message || "").trim();

  if (!name || !email || !message) {
    return htmlResponse(
      '<p style="color:#EA4335">Por favor, preencha nome, e-mail e mensagem.</p>',
      400,
    );
  }

  if (!isValidEmail(email)) {
    return htmlResponse('<p style="color:#EA4335">E-mail invalido.</p>', 400);
  }

  const subject = `Novo pedido de contato: ${name}`;
  const text = [
    `Nome: ${name}`,
    `E-mail: ${email}`,
    `Telefone: ${phone || "(nao informado)"}`,
    "",
    "Mensagem:",
    message,
  ].join("\n");

  try {
    await sendSmtpMail({ subject, text, replyTo: email });

    return htmlResponse(
      `<p style="color:#34A853">Obrigado, ${escapeHtml(name)}! Recebemos sua mensagem.</p>`,
      200,
    );
  } catch (error) {
    console.error("SMTP error", error);

    const href = whatsappHref(name, email, phone, message);

    return htmlResponse(
      `<p style="color:#F59E0B">No momento, estamos com instabilidade no envio por e-mail. Para nao perder seu contato, fale conosco pelo <a href="${href}" target="_blank" rel="noopener noreferrer">WhatsApp</a>.</p>`,
      202,
    );
  }
}

export function GET() {
  return htmlResponse("Method not allowed", 405);
}