import tls from "tls";
import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const htmlResponse = (body: string, status = 200) =>
  new NextResponse(body, {
    status,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      Allow: "POST",
    },
  });

const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

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

const smtpConfig = () => {
  const host = process.env.SMTP_HOST || "smtp0001.neo.space";
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM || user;
  const toRaw = process.env.SMTP_TO || user;

  const to = (toRaw || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  if (!host || !port || !user || !pass || !from || to.length === 0) {
    throw new Error("SMTP environment variables are missing");
  }

  return { host, port, user, pass, from, to };
};

const SMTP_TIMEOUT_MS = 8000;

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
  const socket = tls.connect({ host, port, servername: host });
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

const expect = async (socket: tls.TLSSocket, code: number) => {
  const response = await readResponse(socket);
  if (!response.startsWith(String(code))) {
    throw new Error(`SMTP unexpected response ${response.trim()}`);
  }
  return response;
};

const write = (socket: tls.TLSSocket, line: string) => socket.write(line);
const b64 = (value: string) => Buffer.from(value, "utf8").toString("base64");

const encodeSubject = (value: string) => `=?UTF-8?B?${Buffer.from(value, "utf8").toString("base64")}?=`;

const normalizeBodyLine = (line: string) => (line.startsWith(".") ? `.${line}` : line);

const normalizeMessageBody = (text: string) =>
  text
    .replace(/\r?\n/g, "\n")
    .split("\n")
    .map(normalizeBodyLine)
    .join("\r\n");

const sendSmtpMail = async ({ subject, text }: { subject: string; text: string }) => {
  const { host, port, user, pass, from, to } = smtpConfig();

  if (port !== 465) {
    throw new Error("This implementation supports only SMTPS on port 465");
  }

  let socket: tls.TLSSocket | null = null;

  try {
    socket = await connectSocket(host, port);

    await expect(socket, 220);

    write(socket, "EHLO vexiarh.com.br\r\n");
    await expect(socket, 250);

    write(socket, "AUTH LOGIN\r\n");
    await expect(socket, 334);

    write(socket, `${b64(user)}\r\n`);
    await expect(socket, 334);

    write(socket, `${b64(pass)}\r\n`);
    await expect(socket, 235);

    write(socket, `MAIL FROM:<${from}>\r\n`);
    await expect(socket, 250);

    for (const recipient of to) {
      write(socket, `RCPT TO:<${recipient}>\r\n`);
      await expect(socket, 250);
    }

    write(socket, "DATA\r\n");
    await expect(socket, 354);

    const body = [
      `From: ${from}`,
      `To: ${to.join(", ")}`,
      `Subject: ${encodeSubject(subject)}`,
      "MIME-Version: 1.0",
      "Content-Type: text/plain; charset=utf-8",
      "Content-Transfer-Encoding: 8bit",
      "",
      normalizeMessageBody(text),
      ".",
    ].join("\r\n");

    write(socket, `${body}\r\n`);
    await expect(socket, 250);

    write(socket, "QUIT\r\n");
    socket.end();
  } catch (error) {
    socket?.destroy();
    throw error;
  }
};

export async function POST(req: Request) {
  let payload: ContactPayload = {};
  const ct = req.headers.get("content-type") || "";

  if (ct.includes("application/json")) {
    payload = (await req.json()) as ContactPayload;
  } else {
    const form = await req.formData();
    payload = {
      name: (form.get("name") || "").toString().trim(),
      email: (form.get("email") || "").toString().trim(),
      phone: (form.get("phone") || "").toString().trim(),
      message: (form.get("message") || "").toString().trim(),
    };
  }

  const name = (payload.name || "").trim();
  const email = (payload.email || "").trim();
  const phone = (payload.phone || "").trim();
  const message = (payload.message || "").trim();

  if (!name || !email || !message) {
    return htmlResponse('<p style="color:#EA4335">Por favor, preencha nome, e-mail e mensagem.</p>', 400);
  }

  if (!/.+@.+\..+/.test(email)) {
    return htmlResponse('<p style="color:#EA4335">E-mail inválido.</p>', 400);
  }

  const subject = `Novo pedido de contato: ${name}`;
  const text = `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone || "(não informado)"}\n\nMensagem:\n${message}`;

  try {
    await sendSmtpMail({ subject, text });
    return htmlResponse(
      `<p style="color:#34A853">Obrigado, ${escapeHtml(name)}! Recebemos sua mensagem.</p>`,
      200,
    );
  } catch (err) {
    console.error("SMTP error", err);
    const href = whatsappHref(name, email, phone, message);

    return htmlResponse(
      `<p style="color:#F59E0B">No momento, estamos com instabilidade no envio por e-mail. Para não perder seu contato, continue pelo <a href="${href}" target="_blank" rel="noopener noreferrer">WhatsApp</a>.</p>`,
      202,
    );
  }
}

export function GET() {
  return htmlResponse("Method not allowed", 405);
}