import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest, context: any) {
  // Read the host so the redirect works on any IP (localhost AND 192.168.x.x)
  const host = req.headers.get("host") || "localhost:3000";
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

    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_RECEIVER_EMAIL) {
      return NextResponse.redirect(`${proto}://${host}/form?error=config`, {
        status: 303,
      });
    }

    const { error } = await resend.emails.send({
      from: process.env.CONTACT_SENDER_EMAIL || "onboarding@resend.dev",
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: `[Portfolio] Inquiry from ${fullName || "Unknown"}`,
      text: `Name: ${fullName}\nEmail: ${email || "Not Provided"}\nPhone: ${phone}\nMessage: ${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>Portfolio Inquiry</h2>
          <p><strong>From:</strong> ${fullName} (${email || "Email not provided"})</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <hr />
          <p>${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("[Resend error]", error);
      return NextResponse.redirect(`${proto}://${host}/form?error=send`, {
        status: 303,
      });
    }

    // SUCCESS — redirect to the dedicated success page using the correct host
    return NextResponse.redirect(`${proto}://${host}/form/success`, {
      status: 303,
    });
  } catch (err) {
    console.error("[Form API] Unexpected error:", err);
    return NextResponse.redirect(`${proto}://${host}/form?error=server`, {
      status: 303,
    });
  }
}
