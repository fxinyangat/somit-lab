import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type Body = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  inquiryType?: string;
};

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
  const to = process.env.CONTACT_TO_EMAIL || process.env.CONTACT_EMAIL_TO || process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !to) {
    return NextResponse.json(
      {
        error:
          "Email is not configured. Set RESEND_API_KEY and a destination email in your environment variables.",
      },
      { status: 503 }
    );
  }

  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const subject = (body.subject || "").trim();
  const message = (body.message || "").trim();
  const inquiryType = (body.inquiryType || "General").trim();

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "Name, email, subject, and message are required." },
      { status: 400 }
    );
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const resend = new Resend(apiKey);
  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    inquiryType: escapeHtml(inquiryType),
    message: escapeHtml(message).replaceAll("\n", "<br/>"),
  };

  const html = `
    <h2>New inquiry — SoMIT Lab website</h2>
    <p><strong>Type:</strong> ${safe.inquiryType}</p>
    <p><strong>From:</strong> ${safe.name} &lt;${safe.email}&gt;</p>
    <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
    <hr />
    <p>${safe.message}</p>
  `;

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `[SoMIT] ${inquiryType}: ${subject}`,
    html,
  });

  if (error) {
    return NextResponse.json(
      { error: error.message || "Failed to send email." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
