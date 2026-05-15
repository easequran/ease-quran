import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, whatsapp, childAge, courseInterest, preferredTime, hearAboutUs } =
      body;

    if (!fullName || !email || !whatsapp || !childAge || !courseInterest || !preferredTime) {
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
      subject: "New Free Trial Booking — Ease Quran",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
          <div style="background:#0B1E5B;color:white;padding:20px;border-radius:8px 8px 0 0;">
            <h1 style="margin:0;font-size:22px;">New Free Trial Booking</h1>
            <p style="margin:5px 0 0;opacity:0.8;font-size:14px;">Ease Quran Online Academy</p>
          </div>
          <div style="background:#f8f7f4;padding:20px;border-radius:0 0 8px 8px;border:1px solid #e5e7eb;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;font-weight:bold;color:#0B1E5B;width:160px;">Full Name</td><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;">${fullName}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;font-weight:bold;color:#0B1E5B;">Email</td><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;">${email}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;font-weight:bold;color:#0B1E5B;">WhatsApp</td><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;">${whatsapp}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;font-weight:bold;color:#0B1E5B;">Child Age</td><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;">${childAge}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;font-weight:bold;color:#0B1E5B;">Course</td><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;">${courseInterest}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;font-weight:bold;color:#0B1E5B;">Preferred Time</td><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;">${preferredTime}</td></tr>
              <tr><td style="padding:10px 0;font-weight:bold;color:#0B1E5B;">Heard About Us</td><td style="padding:10px 0;">${hearAboutUs || "Not specified"}</td></tr>
            </table>
            <div style="margin-top:20px;padding:12px;background:#F5A623;border-radius:6px;text-align:center;">
              <p style="margin:0;color:#0B1E5B;font-weight:bold;">⚡ Respond within 2 hours on WhatsApp</p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Free trial API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
