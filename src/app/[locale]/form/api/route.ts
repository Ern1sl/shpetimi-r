import { NextRequest, NextResponse } from "next/server"; // server-side request/ response objects in nextjs app router
import { Resend } from "resend"; // library for sending emails through resend service

const resend = new Resend(process.env.RESEND_API_KEY); // initialized with your API key from .env

export async function POST(req: NextRequest, context: any) {
  // this handles POST requests to /form/api (your form submission)
  // Read the host so the redirect works on any IP (localhost AND 192.168.x.x)
  const host = req.headers.get("host") || "localhost:3000"; // req => contains request data (headers,body,etc)
  const proto = host.startsWith("localhost") ? "http" : "http"; // always http in dev

  try {
    let body: Record<string, string> = {};
    const contentType = req.headers.get("content-type") || "";

    if (
      contentType.includes("application/x-www-form-urlencoded") ||
      contentType.includes("multipart/form-data")
    ) {
      const formData = await req.formData();
      formData.forEach((val, key) => {
        body[key] = val.toString();
      });
    } else {
      body = await req.json();
    }

    const { fullName, phone, email, message } = body;

    const isAjax = req.headers.get("accept")?.includes("application/json");

    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_RECEIVER_EMAIL) {
      if (isAjax)
        return NextResponse.json({ error: "missing_config" }, { status: 500 });
      return NextResponse.redirect(`${proto}://${host}/form?error=config`, {
        status: 303,
      });
    }

    const { error } = await resend.emails.send({
      from: `SHPETIMI-R <${process.env.CONTACT_SENDER_EMAIL || "info@shpetimi-r.com"}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: `New Inquiry: ${fullName || "Unknown"}`,
      text: `Name: ${fullName}\nEmail: ${email || "Not Provided"}\nPhone: ${phone}\nMessage: ${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="https://www.shpetimi-r.com/logo2.png" alt="SHPETIMI-R" style="width: 200px; height: auto;" />
          </div>
          <h2 style="color: #36444f; border-bottom: 2px solid #36444f; padding-bottom: 10px;">New Website Inquiry</h2>
          <p><strong>From:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email || "Not provided"}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #eee; margin-top: 30px;" />
          <p style="font-size: 10px; color: #999; text-align: center;">Sent from shpetimi-r.com</p>
        </div>
      `,
    });

    if (error) {
      console.error("[Resend error]", error);
      if (isAjax)
        return NextResponse.json({ error: "send_failed" }, { status: 500 });
      return NextResponse.redirect(`${proto}://${host}/form?error=send`, {
        status: 303,
      });
    }

    // SUCCESS
    if (isAjax) return NextResponse.json({ success: true });
    return NextResponse.redirect(`${proto}://${host}/form/success`, {
      status: 303,
    });
  } catch (err) {
    console.error("[Form API] Unexpected error:", err);
    const host = req.headers.get("host") || "localhost:3000";
    const proto = host.startsWith("localhost") ? "http" : "http";
    const isAjax = req.headers.get("accept")?.includes("application/json");

    if (isAjax)
      return NextResponse.json({ error: "server_error" }, { status: 500 });
    return NextResponse.redirect(`${proto}://${host}/form?error=server`, {
      status: 303,
    });
  }
}

// Summary
//
// This API route does everything for your contact form:
//
// Reads form submission (JSON or form-data).
// Validates environment configuration.
// Uses Resend API to send email with the form content.
// Handles both AJAX and normal form submissions.
// Returns success/error responses in JSON or redirects.
