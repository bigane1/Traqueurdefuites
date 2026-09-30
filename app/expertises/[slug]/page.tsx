import { notFound } from "next/navigation";
import ExpertiseLayout from "@/components/ExpertiseLayout";
import { getExpertiseBySlug, getSiteContent } from "@/lib/site-content";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const content = await getSiteContent();
  return content.expertises.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = await getExpertiseBySlug(slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
  };
}

export default async function ExpertisePage({ params }: Props) {
  const { slug } = await params;
  const content = await getSiteContent();
  const page = await getExpertiseBySlug(slug);
  if (!page) notFound();

  return <ExpertiseLayout page={page} siblings={content.expertises} />;
}
