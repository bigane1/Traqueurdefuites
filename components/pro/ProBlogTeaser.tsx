import Link from "next/link";
import type { BlogPost } from "@/lib/site-content";

export default function ProBlogTeaser({ posts }: { posts: BlogPost[] }) {
  const latest = posts.slice(0, 3);

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="pro-display text-3xl font-extrabold text-[var(--pro-ink)]">
              Conseils &amp; actualités
            </h2>
            <p className="mt-2 text-sm">
              Articles pour mieux référencer vos recherches (fuites, débouchage, région).
            </p>
          </div>
          <Link
            href="/blog"
            className="text-sm font-bold text-[var(--pro-accent-dark)] hover:underline shrink-0"
          >
            Tout le blog →
          </Link>
        </div>
        <ul className="grid md:grid-cols-3 gap-6">
          {latest.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/blog/${p.slug}`}
                className="group block h-full rounded-3xl overflow-hidden border border-[var(--pro-line)] bg-white hover:shadow-lg transition"
              >
                <div className="aspect-[16/10] overflow-hidden bg-[var(--pro-surface)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[var(--pro-accent-dark)]">
                    {p.category}
                  </p>
                  <h3 className="font-bold text-[var(--pro-ink)] mt-2 leading-snug group-hover:text-[var(--pro-accent-dark)]">
                    {p.title}
                  </h3>
                  <p className="text-xs mt-2 line-clamp-2">{p.excerpt}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
