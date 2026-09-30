import type { MetadataRoute } from "next";
import { getSiteContent } from "@/lib/site-content";
import { SITE_URL } from "@/lib/schema";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { expertises, blog } = await getSiteContent();
  const base = SITE_URL.replace(/\/$/, "");

  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/moderne`, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/mutualisation`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/qui-sommes-nous`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tarifs`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/demande-intervention`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/mentions-legales`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/cgu`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/cgv`, changeFrequency: "yearly", priority: 0.3 },
    ...expertises.map((e) => ({
      url: `${base}/expertises/${e.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...blog.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
