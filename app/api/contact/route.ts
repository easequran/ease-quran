import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Ease Quran Academy" <${process.env.SMTP_USER}>`,
      to: "contacteasequran@gmail.com",
      replyTo: email,
      subject: `New Inquiry: ${subject || "General"} — from ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
          <div style="background:#0B1E5B;color:white;padding:20px;border-radius:8px 8px 0 0;">
            <h1 style="margin:0;font-size:22px;">New Contact Inquiry</h1>
            <p style="margin:5px 0 0;opacity:0.8;font-size:14px;">Ease Quran Online Academy</p>
          </div>
          <div style="background:#f8f7f4;padding:20px;border-radius:0 0 8px 8px;border:1px solid #e5e7eb;">
            <p><strong style="color:#0B1E5B;">Name:</strong> ${name}</p>
            <p><strong style="color:#0B1E5B;">Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong style="color:#0B1E5B;">Phone / WhatsApp:</strong> ${phone}</p>` : ""}
            ${subject ? `<p><strong style="color:#0B1E5B;">Interested In:</strong> ${subject}</p>` : ""}
            <p><strong style="color:#0B1E5B;">Message:</strong></p>
            <div style="background:white;padding:15px;border-radius:6px;border-left:4px solid #F5A623;">
              ${message.replace(/\n/g, "<br>")}
            </div>
            <div style="margin-top:20px;padding:12px;background:#F5A623;border-radius:6px;text-align:center;">
              <p style="margin:0;color:#0B1E5B;font-weight:bold;">Respond within 2 hours</p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
