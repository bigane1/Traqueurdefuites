import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingCTA from "@/components/FloatingCTA";
import { getSiteContent } from "@/lib/site-content";

export const dynamic = "force-dynamic";
export const metadata = { title: "Blog" };

const categoryLabel = { conseils: "Conseils", interventions: "Interventions", regional: "Régional" };

export default function BlogIndexPage() {
  const posts = [...getSiteContent().blog].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <div className="bg-slate-900 text-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-extrabold">Blog</h1>
            <p className="text-slate-400 mt-2">Conseils fuites & canalisations.</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="rounded-2xl overflow-hidden border border-slate-200 bg-white hover:shadow-lg transition">
              <div className="aspect-video bg-slate-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={post.image} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <p className="text-xs font-bold text-blue-600 uppercase">{categoryLabel[post.category]}</p>
                <h2 className="font-bold text-slate-900 mt-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-sm text-slate-500 mt-2">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
      <FloatingCTA />
    </>
  );
}
