import Link from "next/link";
import type { SiteContent } from "@/lib/site-content";
import { TEL_DISPLAY, telHref, whatsappHref } from "@/lib/contact";

export default function HeroEditorial({ content }: { content: SiteContent }) {
  const featured = content.expertises[0];

  return (
    <section className="bg-stone-bg border-b border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 py-14 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-7">
            <div className="accent-bar mb-6" />
            <p className="text-sm font-semibold text-accent uppercase tracking-[0.2em] mb-4">
              {content.heroEyebrow}
            </p>
            <h1 className="editorial-title mb-6">{content.heroTitle}</h1>
            <p className="text-lg text-stone-600 leading-relaxed max-w-xl mb-8">
              {content.heroLead}
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href={telHref}
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-bold px-6 py-3.5 transition"
              >
                {TEL_DISPLAY}
              </a>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-stone-800 text-stone-900 font-semibold px-6 py-3.5 hover:bg-stone-900 hover:text-white transition"
              >
                WhatsApp
              </a>
            </div>

            <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-stone-300/60">
              {content.stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-2xl font-bold text-stone-900">{s.value}</dt>
                  <dd className="text-xs text-stone-500 mt-1 leading-snug">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] overflow-hidden bg-stone-300">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={content.heroImage}
                alt={content.heroImageAlt}
                className="w-full h-full object-cover grayscale-[20%] contrast-[1.05]"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-stone-900/10" />
            </div>
            {featured && (
              <Link
                href={`/expertises/${featured.slug}`}
                className="block bg-white border-l-4 border-accent p-5 shadow-sm hover:shadow-md transition group"
              >
                <p className="text-xs font-bold text-accent uppercase tracking-wider mb-1">
                  Spécialité
                </p>
                <p className="font-bold text-stone-900 group-hover:text-accent transition">
                  {featured.title} →
                </p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
