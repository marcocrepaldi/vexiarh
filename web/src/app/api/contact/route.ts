import net from "net";
import tls from "tls";
import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const htmlResponse = (body: string, status = 200) =>
  new NextResponse(body, { status, headers: { "Content-Type": "text/html; charset=utf-8" } });

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
  const to = process.env.SMTP_TO || user;
  if (!host || !port || !user || !pass || !from || !to) {
    throw new Error("SMTP environment variables are missing");
  }
  return { host, port, user, pass, from, to };
};

const preferredPorts = (port: number) =>
  Array.from(new Set([port, port === 465 ? 587 : 465]));

const SMTP_TIMEOUT_MS = 8000;

const waitForConnect = (socket: net.Socket | tls.TLSSocket) =>
  new Promise<void>((resolve, reject) => {
    const cleanup = () => {
      socket.off("connect", onConnect);
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
    socket.once("connect", onConnect);
    socket.once("error", onError);
    socket.once("timeout", onTimeout);
  });

const connectSocket = async (host: string, port: number) => {
  const socket =
    port === 465
      ? tls.connect({ host, port, servername: host })
      : net.createConnection({ host, port });
  await waitForConnect(socket);
  return socket;
};

const upgradeToTls = async (socket: net.Socket, host: string) => {
  const secureSocket = tls.connect({ socket, servername: host });
  await waitForConnect(secureSocket);
  return secureSocket;
};

const readResponse = (socket: net.Socket | tls.TLSSocket) =>
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

const expect = async (socket: net.Socket | tls.TLSSocket, code: number) => {
  const response = await readResponse(socket);
  if (!response.startsWith(String(code))) {
    throw new Error(`SMTP unexpected response ${response.trim()}`);
  }
  return response;
};

const write = (socket: net.Socket | tls.TLSSocket, line: string) => socket.write(line);
const b64 = (value: string) => Buffer.from(value, "utf8").toString("base64");

const sendSmtpMail = async ({ subject, text }: { subject: string; text: string }) => {
  const { host, port, user, pass, from, to } = smtpConfig();
  const attempts = preferredPorts(port);
  const errors: string[] = [];

  for (const attemptPort of attempts) {
    let socket: net.Socket | tls.TLSSocket | null = null;

    try {
      socket = await connectSocket(host, attemptPort);
      await expect(socket, 220);
      write(socket, "EHLO vexiarh.com.br\r\n");
      await expect(socket, 250);

      if (attemptPort !== 465) {
        write(socket, "STARTTLS\r\n");
        await expect(socket, 220);
        socket = await upgradeToTls(socket as net.Socket, host);
        write(socket, "EHLO vexiarh.com.br\r\n");
        await expect(socket, 250);
      }

      write(socket, "AUTH LOGIN\r\n");
      await expect(socket, 334);
      write(socket, `${b64(user!)}\r\n`);
      await expect(socket, 334);
      write(socket, `${b64(pass!)}\r\n`);
      await expect(socket, 235);
      write(socket, `MAIL FROM:<${from}>\r\n`);
      await expect(socket, 250);
      write(socket, `RCPT TO:<${to}>\r\n`);
      await expect(socket, 250);
      write(socket, "DATA\r\n");
      await expect(socket, 354);

      const body = `From: ${from}\r\nTo: ${to}\r\nSubject: ${subject}\r\nContent-Type: text/plain; charset=utf-8\r\n\r\n${text}\r\n.`;
      write(socket, `${body}\r\n`);
      await expect(socket, 250);
      write(socket, "QUIT\r\n");
      socket.end();
      return;
    } catch (error) {
      errors.push(`porta ${attemptPort}: ${error instanceof Error ? error.message : String(error)}`);
      socket?.destroy();
    }
  }

  throw new Error(`SMTP send failed (${errors.join(" | ")})`);
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

  if (!name || !email || !message)
    return htmlResponse('<p style="color:#EA4335">Por favor, preencha nome, e-mail e mensagem.</p>', 400);

  if (!/.+@.+\..+/.test(email))
    return htmlResponse('<p style="color:#EA4335">E-mail inválido.</p>', 400);

  const subject = `Novo pedido de contato: ${name}`;
  const text = `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone || "(não informado)"}\n\nMensagem:\n${message}`;

  try {
    await sendSmtpMail({ subject, text });
    const safeName = name.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return htmlResponse(`<p style="color:#34A853">Obrigado, ${safeName}! Recebemos sua mensagem.</p>`, 200);
  } catch (err) {
    console.error("SMTP error", err);
    const href = whatsappHref(name, email, phone, message);
    return htmlResponse(
      `<p style="color:#F59E0B">No momento, estamos com instabilidade no envio por e-mail. Para nao perder seu contato, continue pelo WhatsApp: ${href}</p>`,
      202,
    );
  }
}

export function GET() {
  return htmlResponse("Method not allowed", 405);
}
