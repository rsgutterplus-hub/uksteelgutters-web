import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // Requires: npm install stripe
  // Requires Vercel env vars: STRIPE_SECRET_KEY, NEXT_PUBLIC_BASE_URL

  const stripeKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeKey) {
    return NextResponse.json(
      { error: "Stripe is not configured. Please add STRIPE_SECRET_KEY to your environment variables." },
      { status: 500 }
    );
  }

  try {
    const Stripe = (await import("stripe")).default;
    const stripe = new Stripe(stripeKey, { apiVersion: "2025-01-27.acacia" });

    const { items } = await req.json();
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://uksteelgutters-web.vercel.app";

    const VAT_RATE = 0.20;

    const lineItems = items.map((item: {
      name: string;
      colour: string;
      finish: string;
      system: string;
      unitPrice: number;
      unit: string;
      quantity: number;
    }) => ({
      price_data: {
        currency: "gbp",
        product_data: {
          name: `${item.name} \u2014 ${item.colour} (${item.finish})`,
          description: `${item.system} System | ${item.unit}`,
        },
        // unitPrice is ex-VAT; we pass inc-VAT to Stripe
        unit_amount: Math.round(item.unitPrice * (1 + VAT_RATE) * 100),
        tax_behavior: "inclusive",
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/cart`,
      shipping_address_collection: { allowed_countries: ["GB"] },
      metadata: { source: "uksteelgutters" },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
