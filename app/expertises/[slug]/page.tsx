import { notFound } from "next/navigation";
import ExpertiseLayout from "@/components/ExpertiseLayout";
import { getExpertiseBySlug, getSiteContent } from "@/lib/site-content";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getSiteContent().expertises.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getExpertiseBySlug(slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
  };
}

export default async function ExpertisePage({ params }: Props) {
  const { slug } = await params;
  const content = getSiteContent();
  const page = getExpertiseBySlug(slug);
  if (!page) notFound();

  return <ExpertiseLayout page={page} siblings={content.expertises} />;
}
