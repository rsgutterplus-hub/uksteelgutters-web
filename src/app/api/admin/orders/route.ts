import { NextRequest, NextResponse } from "next/server";
import { createHash } from "crypto";
import { kvGet, kvSet } from "@/lib/upstash";

function isAuthed(req: NextRequest): boolean {
  const cookie = req.cookies.get("uksg_admin");
  if (!cookie) return false;
  const expected = createHash("sha256")
    .update((process.env.ADMIN_PASSWORD || "") + "uksteelgutters_crm")
    .digest("hex");
  return cookie.value === expected;
}

export async function GET(req: NextRequest) {
  if (!isAuthed(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const orders = await kvGet<unknown[]>("crm_orders") ?? [];
    return NextResponse.json(orders);
  } catch {
    return NextResponse.json([]);
  }
}

export async function POST(req: NextRequest) {
  if (!isAuthed(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const order = await req.json();
    const orders = await kvGet<unknown[]>("crm_orders") ?? [];
    orders.unshift(order);
    await kvSet("crm_orders", orders);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Storage error" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  if (!isAuthed(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const order = await req.json() as Record<string, unknown>;
    const orders = (await kvGet<Record<string, unknown>[]>("crm_orders") ?? [])
      .map(o => o.id === order.id ? order : o);
    await kvSet("crm_orders", orders);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Storage error" }, { status: 500 });
  }
}
