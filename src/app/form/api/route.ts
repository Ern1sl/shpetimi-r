import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    let body;
    const contentType = req.headers.get("content-type");

    if (contentType?.includes("application/x-www-form-urlencoded") || contentType?.includes("multipart/form-data")) {
      const formData = await req.formData();
      body = Object.fromEntries(formData.entries());
    } else {
      body = await req.json();
    }

    const { fullName, company, email, messageType, message } = body as any;

    if (!process.env.RESEND_API_KEY) {
      return new Response("<script>window.top.postMessage({type: 'error', message: 'Config error'}, '*');</script>", {
        headers: { "Content-Type": "text/html" },
      });
    }

    const { error } = await resend.emails.send({
      from: process.env.CONTACT_SENDER_EMAIL || "onboarding@resend.dev",
      to: process.env.CONTACT_RECEIVER_EMAIL || "ernisloshaj52@gmail.com",
      subject: `[Portfolio] ${messageType}`,
      text: `Name: ${fullName}\nEmail: ${email}\nCompany: ${company}\nMessage: ${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>Portfolio Inquiry</h2>
          <p><strong>From:</strong> ${fullName} (${email})</p>
          <p><strong>Type:</strong> ${messageType}</p>
          <hr />
          <p>${message}</p>
        </div>
      `,
    });

    if (error) {
      return new Response(`<script>window.top.postMessage({type: 'error', message: '${error.message}'}, '*');</script>`, {
        headers: { "Content-Type": "text/html" },
      });
    }

    // ✅ NATIVE SIGNAL: Tells the main page to show completion without reloading
    return new Response("<script>window.top.postMessage({type: 'success'}, '*');</script>", {
      headers: { "Content-Type": "text/html" },
    });

  } catch (err) {
    return new Response("<script>window.top.postMessage({type: 'error', message: 'Server error'}, '*');</script>", {
      headers: { "Content-Type": "text/html" },
    });
  }
}
