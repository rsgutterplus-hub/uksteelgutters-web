import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // Requires: RESEND_API_KEY in Vercel environment variables
  // Sign up free at resend.com — no npm install needed

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.QUOTE_EMAIL || "quote@uksteelgutters.co.uk";

  const body = await req.json();
  const { name, company, email, phone, message, items } = body;

  const itemRows = (items || []).map((item: {
    name: string; colour: string; finish: string; system: string; quantity: number; unit: string; unitPrice: number;
  }) => `
    <tr style="border-bottom:1px solid #eee">
      <td style="padding:8px">${item.name}</td>
      <td style="padding:8px">${item.colour} (${item.finish})</td>
      <td style="padding:8px">${item.system}</td>
      <td style="padding:8px">${item.quantity} × ${item.unit}</td>
      <td style="padding:8px">£${item.unitPrice.toFixed(2)}</td>
    </tr>`).join("");

  const html = `
    <h2>New Quote Request — UKSteelGutters</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Company:</strong> ${company || "—"}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || "—"}</p>
    <p><strong>Notes:</strong> ${message || "—"}</p>
    <h3>Products Requested</h3>
    <table style="width:100%;border-collapse:collapse;font-size:14px">
      <thead><tr style="background:#f5f5f5">
        <th style="padding:8px;text-align:left">Product</th>
        <th style="padding:8px;text-align:left">Colour</th>
        <th style="padding:8px;text-align:left">System</th>
        <th style="padding:8px;text-align:left">Qty</th>
        <th style="padding:8px;text-align:left">Guide Price</th>
      </tr></thead>
      <tbody>${itemRows}</tbody>
    </table>
  `;

  if (!apiKey) {
    console.log("Quote request received (no RESEND_API_KEY set):", { name, email, items });
    return NextResponse.json({ ok: true });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Authorization": `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "quotes@uksteelgutters.co.uk",
        to: toEmail,
        reply_to: email,
        subject: `Quote Request from ${name}${company ? ` — ${company}` : ""}`,
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
