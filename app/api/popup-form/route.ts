import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, whatsapp, course, ageGroup } = body;

    if (!fullName || !email || !whatsapp || !course || !ageGroup) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
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
      subject: "New Free Trial Request — Ease Quran",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #0B1E5B; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 22px;">New Free Trial Request</h1>
            <p style="margin: 5px 0 0; opacity: 0.8; font-size: 14px;">Ease Quran Online Academy</p>
          </div>
          <div style="background: #f8f7f4; padding: 20px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #0B1E5B; width: 140px;">Full Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #374151;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #0B1E5B;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #374151;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #0B1E5B;">WhatsApp</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #374151;">${whatsapp}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #0B1E5B;">Course Interest</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #374151;">${course}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #0B1E5B;">Age Group</td>
                <td style="padding: 10px 0; color: #374151;">${ageGroup}</td>
              </tr>
            </table>
            <div style="margin-top: 20px; padding: 12px; background: #F5A623; border-radius: 6px; text-align: center;">
              <p style="margin: 0; color: #0B1E5B; font-weight: bold;">⚡ Respond within 2 hours on WhatsApp</p>
            </div>
            <p style="margin-top: 15px; font-size: 12px; color: #6b7280;">Source: Popup form on easequran.com</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Popup form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
