import { NextRequest, NextResponse } from "next/server";

// Uses Stripe REST API directly — no npm install needed
// Requires Vercel env vars: STRIPE_SECRET_KEY, NEXT_PUBLIC_BASE_URL

interface CartItem {
  name: string;
  colour: string;
  finish: string;
  system: string;
  unitPrice: number;
  unit: string;
  quantity: number;
}

export async function POST(req: NextRequest) {
  const stripeKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeKey) {
    return NextResponse.json(
      { error: "Stripe is not configured. Please add STRIPE_SECRET_KEY to your Vercel environment variables." },
      { status: 500 }
    );
  }

  try {
    const { items }: { items: CartItem[] } = await req.json();
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://uksteelgutters-web.vercel.app";
    const VAT_RATE = 0.20;

    // Build form-encoded body for Stripe Checkout Sessions API
    const params = new URLSearchParams();
    params.append("mode", "payment");
    params.append("success_url", `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`);
    params.append("cancel_url", `${baseUrl}/cart`);
    params.append("shipping_address_collection[allowed_countries][0]", "GB");
    params.append("metadata[source]", "uksteelgutters");

    items.forEach((item, i) => {
      const unitAmountPence = Math.round(item.unitPrice * (1 + VAT_RATE) * 100);
      params.append(`line_items[${i}][price_data][currency]`, "gbp");
      params.append(`line_items[${i}][price_data][product_data][name]`, `${item.name} \u2014 ${item.colour} (${item.finish})`);
      params.append(`line_items[${i}][price_data][product_data][description]`, `${item.system} System | ${item.unit}`);
      params.append(`line_items[${i}][price_data][unit_amount]`, unitAmountPence.toString());
      params.append(`line_items[${i}][quantity]`, item.quantity.toString());
    });

    const res = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${stripeKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    const session = await res.json() as { url?: string; error?: { message: string } };

    if (!res.ok || !session.url) {
      return NextResponse.json({ error: session.error?.message || "Stripe error" }, { status: 500 });
    }

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
