import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // Requires: RESEND_API_KEY in Vercel environment variables
  // Sign up free at resend.com — no npm install needed

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.QUOTE_EMAIL || "quote@uksteelgutters.co.uk";

  const body = await req.json();
  const { name, company, tradeType, email, phone, address, vatNumber, newsletter, message } = body;

  const html = `
    <h2>New Trade Account Application — UKSteelGutters</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Company:</strong> ${company}</p>
    <p><strong>Trade Type:</strong> ${tradeType}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Address:</strong> ${address || "—"}</p>
    <p><strong>VAT Number:</strong> ${vatNumber || "—"}</p>
    <p><strong>Newsletter:</strong> ${newsletter ? "Yes" : "No"}</p>
    <p><strong>Notes:</strong> ${message || "—"}</p>
  `;

  if (!apiKey) {
    console.log("Trade account application received (no RESEND_API_KEY set):", { name, email, company });
    return NextResponse.json({ ok: true });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Authorization": `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "trade@uksteelgutters.co.uk",
        to: toEmail,
        reply_to: email,
        subject: `Trade Account Application — ${company} (${tradeType})`,
        html,
      }),
    });
    if (!res.ok) {
      const err = await res.text();
      return NextResponse.json({ error: err }, { status: 500 });
    }
    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
