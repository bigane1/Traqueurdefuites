import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, password } = (await req.json()) as { email?: string; password?: string };
  const adminPassword = process.env.ADMIN_PASSWORD;
  const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();

  if (!adminPassword) {
    return NextResponse.json({ error: "ADMIN_PASSWORD non configuré sur le serveur." }, { status: 500 });
  }

  if (adminEmail && email?.trim().toLowerCase() !== adminEmail) {
    return NextResponse.json({ error: "Identifiants incorrects." }, { status: 401 });
  }

  if (password !== adminPassword) {
    return NextResponse.json({ error: "Identifiants incorrects." }, { status: 401 });
  }

  const res = NextResponse.json({ success: true });
  res.cookies.set("tf_admin", "1", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  });
  return res;
}
