import { NextResponse } from "next/server";

const apiKey = process.env.MAILCHIMP_API_KEY || "";
const listId = process.env.MAILCHIMP_LIST_ID || "";
const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX || (apiKey.split("-")[1] || "");

const htmlResponse = (body: string, status = 200) =>
  new NextResponse(body, { status, headers: { "Content-Type": "text/html; charset=utf-8" } });

export async function POST(req: Request) {
  const form = await req.formData();
  const email = (form.get("email1") || form.get("email") || "").toString().trim().toLowerCase();

  if (!email) {
    return htmlResponse('<p class="mc-error-notice">Enter the E-mail id</p>', 400);
  }

  if (!apiKey || !listId || !serverPrefix) {
    return htmlResponse('<p class="mc-error-notice">Mailchimp credentials not configured.</p>', 500);
  }

  try {
    const res = await fetch(`https://${serverPrefix}.api.mailchimp.com/3.0/lists/${listId}/members`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString("base64")}`,
      },
      body: JSON.stringify({ email_address: email, status: "pending" }),
    });

    if (res.status === 200) {
      return htmlResponse('<p class="mc-success-notice" style="color:#34A853">Successfully Subscribed. Please check confirmation email.</p>');
    }

    const data = await res.json().catch(() => ({} as any));
    const detail = (data as any)?.detail || "Subscription failed.";
    return htmlResponse(`<p class="mc-error-notice">${detail}</p>`, 400);
  } catch (error) {
    return htmlResponse('<p class="mc-error-notice">Unexpected error subscribing. Try again.</p>', 500);
  }
}

export function GET() {
  return htmlResponse("Method not allowed", 405);
}
