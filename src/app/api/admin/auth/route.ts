import { NextRequest, NextResponse } from "next/server";
import { createHash } from "crypto";

function getSessionToken() {
  return createHash("sha256")
    .update((process.env.ADMIN_PASSWORD || "") + "uksteelgutters_crm")
    .digest("hex");
}

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();
    if (!process.env.ADMIN_PASSWORD || password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }
    const token = getSessionToken();
    const res = NextResponse.json({ ok: true });
    res.cookies.set("uksg_admin", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });
    return res;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set("uksg_admin", "", { maxAge: 0, path: "/" });
  return res;
}
