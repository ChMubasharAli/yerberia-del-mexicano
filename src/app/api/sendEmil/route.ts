// app/api/contact/route.js
import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { fullName, email, phoneNumber, message } = await req.json();

  // Validation
  if (!fullName || !email || !message) {
    return new Response(
      JSON.stringify({ error: "Name, email, and message are required" }),
      { status: 400 }
    );
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return new Response(
      JSON.stringify({ error: "Please enter a valid email address" }),
      { status: 400 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_RECEIVER,
      subject: "New Contact Form Submission - Yerberia del Mexicano",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #059669; border-bottom: 2px solid #059669; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong style="color: #1e293b;">Name:</strong> ${fullName}</p>
            <p><strong style="color: #1e293b;">Email:</strong> ${email}</p>
            <p><strong style="color: #1e293b;">Phone:</strong> ${
              phoneNumber || "Not provided"
            }</p>
          </div>
          <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; border-left: 4px solid #059669;">
            <strong style="color: #1e293b;">Message:</strong>
            <p style="color: #374151; margin-top: 10px; line-height: 1.6;">${message.replace(
              /\n/g,
              "<br>"
            )}</p>
          </div>
          <div style="margin-top: 20px; padding: 15px; background: #fffbeb; border-radius: 8px;">
            <p style="color: #92400e; margin: 0;">
              <strong>Submitted:</strong> ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Thank you for your message! We will get back to you soon.",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to send message. Please try again later.",
      }),
      { status: 500 }
    );
  }
}
