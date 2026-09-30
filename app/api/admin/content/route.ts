import { NextRequest, NextResponse } from "next/server";
import {
  getSiteContent,
  mergeSiteContent,
  saveSiteContent,
  type SiteContent,
} from "@/lib/site-content";

function isAuthorized(req: NextRequest) {
  return req.cookies.get("tf_admin")?.value === "1";
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
  }
  return NextResponse.json(await getSiteContent());
}

export async function PUT(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
  }

  try {
    const body = (await req.json()) as Partial<SiteContent>;
    const merged = mergeSiteContent({ ...(await getSiteContent()), ...body });
    await saveSiteContent(merged);
    return NextResponse.json({ success: true, content: merged });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Erreur enregistrement";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
