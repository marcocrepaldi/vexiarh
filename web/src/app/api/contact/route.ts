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

const sendSmtpMail = async ({ subject, text }: { subject: string; text: string }) => {
  const { host, port, user, pass, from, to } = smtpConfig();
  const socket = tls.connect({ host, port, servername: host });

  const read = () =>
    new Promise<string>((resolve, reject) => {
      const cleanup = () => {
        socket.off("data", onData);
        socket.off("error", onErr);
        socket.off("close", onClose);
      };
      const onData = (d: Buffer) => { cleanup(); resolve(d.toString()); };
      const onErr = (e: Error) => { cleanup(); reject(e); };
      const onClose = () => { cleanup(); reject(new Error("SMTP connection closed")); };
      socket.once("data", onData);
      socket.once("error", onErr);
      socket.once("close", onClose);
    });

  const expect = async (code: number) => {
    const res = await read();
    if (!res.startsWith(String(code))) throw new Error(`SMTP unexpected response ${res.trim()}`);
  };
  const write = (l: string) => socket.write(l);
  const b64 = (s: string) => Buffer.from(s, "utf8").toString("base64");

  await expect(220);
  write(`EHLO vexiarh.com.br\r\n`); await expect(250);
  write(`AUTH LOGIN\r\n`); await expect(334);
  write(`${b64(user!)}\r\n`); await expect(334);
  write(`${b64(pass!)}\r\n`); await expect(235);
  write(`MAIL FROM:<${from}>\r\n`); await expect(250);
  write(`RCPT TO:<${to}>\r\n`); await expect(250);
  write("DATA\r\n"); await expect(354);

  const body = `From: ${from}\r\nTo: ${to}\r\nSubject: ${subject}\r\nContent-Type: text/plain; charset=utf-8\r\n\r\n${text}\r\n.`;
  write(`${body}\r\n`); await expect(250);
  write("QUIT\r\n"); socket.end();
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
    return htmlResponse('<p style="color:#EA4335">Não foi possível enviar agora. Tente novamente.</p>', 500);
  }
}

export function GET() {
  return htmlResponse("Method not allowed", 405);
}
