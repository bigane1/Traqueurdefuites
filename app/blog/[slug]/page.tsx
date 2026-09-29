import { notFound } from "next/navigation";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingCTA from "@/components/FloatingCTA";
import { getSiteContent } from "@/lib/site-content";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getSiteContent().blog.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getSiteContent().blog.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getSiteContent().blog.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <SiteHeader />
      <main className="pt-16 max-w-3xl mx-auto px-4 py-12">
        <Link href="/blog" className="text-sm font-bold text-blue-600 hover:underline">
          ← Blog
        </Link>
        <h1 className="text-4xl font-extrabold text-slate-900 mt-4 mb-2">{post.title}</h1>
        <time className="text-sm text-slate-400">{post.date}</time>
        <div className="my-8 rounded-2xl overflow-hidden aspect-video">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="space-y-4 text-slate-700 leading-relaxed">
          {post.content.map((para) => (
            <p key={para.slice(0, 32)}>{para}</p>
          ))}
        </div>
      </main>
      <SiteFooter />
      <FloatingCTA />
    </>
  );
}
