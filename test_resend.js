const { Resend } = require("resend");
const resend = new Resend("re_Hnangwhz_EjrzbQtfguoNY99brzdQvjc1");

async function test() {
  console.log("Testing Resend API Key...");
  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "ernisloshaj52@gmail.com",
    subject: "DIAGNOSTIC TEST - PLEASE CHECK",
    text: "If you receive this, the server-side Resend API is working perfectly.",
  });

  if (error) {
    console.error("❌ TEST FAILED:", JSON.stringify(error, null, 2));
    process.exit(1);
  }

  console.log("✅ TEST SUCCESS! Email ID:", data.id);
  process.exit(0);
}

test();
