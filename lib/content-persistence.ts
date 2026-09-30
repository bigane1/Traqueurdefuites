import fs from "fs";
import path from "path";
import { isDatabaseConfigured, prisma } from "@/lib/db";
import type { SiteContent } from "@/lib/site-content";

export const CONTENT_FILE = path.join(process.cwd(), "data", "site-content.json");
const DB_KEY = "site_content";

export function readContentFile(): Partial<SiteContent> | null {
  try {
    if (fs.existsSync(CONTENT_FILE)) {
      return JSON.parse(fs.readFileSync(CONTENT_FILE, "utf8")) as Partial<SiteContent>;
    }
  } catch {
    /* ignore */
  }
  return null;
}

export async function readContentFromDb(): Promise<Partial<SiteContent> | null> {
  if (!isDatabaseConfigured()) return null;
  try {
    const row = await prisma.siteSetting.findUnique({ where: { key: DB_KEY } });
    if (row?.value && typeof row.value === "object") {
      return row.value as Partial<SiteContent>;
    }
  } catch (e) {
    console.error("[content-persistence] db read", e);
  }
  return null;
}

/** DB prioritaire (prod Vercel), puis fichier local (dev). */
export async function loadStoredContent(): Promise<Partial<SiteContent> | null> {
  const fromDb = await readContentFromDb();
  if (fromDb) return fromDb;
  return readContentFile();
}

export async function persistSiteContent(content: SiteContent): Promise<void> {
  let persisted = false;

  if (isDatabaseConfigured()) {
    await prisma.siteSetting.upsert({
      where: { key: DB_KEY },
      create: { key: DB_KEY, value: content as object },
      update: { value: content as object },
    });
    persisted = true;
  }

  try {
    fs.mkdirSync(path.dirname(CONTENT_FILE), { recursive: true });
    fs.writeFileSync(CONTENT_FILE, JSON.stringify(content, null, 2), "utf8");
    persisted = true;
  } catch (e) {
    if (!isDatabaseConfigured()) {
      throw new Error(
        "Impossible d'enregistrer le contenu. En production, configurez DATABASE_URL (ex. Vercel Postgres).",
        { cause: e }
      );
    }
    console.warn("[content-persistence] file write skipped (read-only FS)", e);
  }

  if (!persisted) {
    throw new Error("Aucun stockage disponible pour enregistrer le contenu.");
  }
}
