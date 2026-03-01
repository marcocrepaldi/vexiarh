import { NextResponse } from "next/server";

const htmlResponse = (body: string, status = 200) =>
  new NextResponse(body, { status, headers: { "Content-Type": "text/html; charset=utf-8" } });

export async function POST(req: Request) {
  const form = await req.formData();
  const name = (form.get("name") || "").toString().trim();
  const email = (form.get("email") || "").toString().trim();
  const phone = (form.get("phone") || "").toString().trim();
  const message = (form.get("message") || "").toString().trim();

  if (!name || !email || !message) {
    return htmlResponse('<p style="color:#EA4335">Please fill the required fields.</p>', 400);
  }

  const safeName = name.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return htmlResponse(
    `<p style="color:#34A853">Thanks ${safeName}, your message was received. We'll reply soon.</p>`,
    200
  );
}

export function GET() {
  return htmlResponse("Method not allowed", 405);
}
