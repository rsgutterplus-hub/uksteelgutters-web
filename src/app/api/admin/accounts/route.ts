import { NextRequest, NextResponse } from "next/server";
import { createHash } from "crypto";
import { kv } from "@vercel/kv";

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
    const accounts = await kv.get<unknown[]>("crm_accounts") ?? [];
    return NextResponse.json(accounts);
  } catch {
    return NextResponse.json([]);
  }
}

export async function POST(req: NextRequest) {
  if (!isAuthed(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const account = await req.json();
    const accounts = await kv.get<unknown[]>("crm_accounts") ?? [];
    accounts.unshift(account);
    await kv.set("crm_accounts", accounts);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Storage error" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  if (!isAuthed(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const account = await req.json() as Record<string, unknown>;
    const accounts = (await kv.get<Record<string, unknown>[]>("crm_accounts") ?? [])
      .map(a => a.id === account.id ? account : a);
    await kv.set("crm_accounts", accounts);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Storage error" }, { status: 500 });
  }
}
