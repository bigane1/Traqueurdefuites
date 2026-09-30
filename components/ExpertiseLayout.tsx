import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingCTA from "@/components/FloatingCTA";
import type { ExpertisePage } from "@/lib/site-content";
import { telHref, TEL_DISPLAY, whatsappHref } from "@/lib/contact";

export default function ExpertiseLayout({
  page,
  siblings,
}: {
  page: ExpertisePage;
  siblings: ExpertisePage[];
}) {
  const others = siblings.filter((s) => s.slug !== page.slug);

  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <section className="relative bg-slate-950 text-white py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-grid-modern opacity-30" />
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center relative">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-300 bg-blue-500/20 px-4 py-1.5 rounded-full mb-4 border border-blue-400/30">
                {page.badge}
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">{page.title}</h1>
              <p className="text-xl text-blue-200/90 mb-2">{page.subtitle}</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-xl">{page.description}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={telHref}
                  className="font-bold bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3.5 rounded-xl shadow-lg shadow-orange-500/25"
                >
                  {TEL_DISPLAY}
                </a>
                <a
                  href={whatsappHref(`Devis : ${page.shortTitle}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold bg-emerald-600 hover:bg-emerald-500 px-6 py-3.5 rounded-xl"
                >
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video ring-1 ring-white/10 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={page.heroImage} alt={page.heroImageAlt} className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {page.spotlights?.map((spot) => (
          <section
            key={spot.title}
            className="py-16 px-4 border-t border-slate-100 bg-surface"
          >
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
              <div
                className={`rounded-2xl overflow-hidden aspect-[4/3] ring-1 ring-slate-200 shadow-lg ${
                  spot.imageLeft ? "lg:order-1" : "lg:order-2"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={spot.image} alt={spot.imageAlt} className="w-full h-full object-cover" />
              </div>
              <div className={spot.imageLeft ? "lg:order-2" : "lg:order-1"}>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">{spot.title}</h2>
                {spot.subtitle ? (
                  <p className="text-blue-700 font-semibold text-sm mb-4">{spot.subtitle}</p>
                ) : null}
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{spot.body}</p>
              </div>
            </div>
          </section>
        ))}

        <section className="max-w-7xl mx-auto px-4 py-16 grid sm:grid-cols-2 gap-6">
          {page.benefits.map((b) => (
            <div key={b.title} className="p-6 rounded-2xl bg-surface border border-slate-200 hover:shadow-md transition">
              <span className="text-2xl">{b.icon}</span>
              <h2 className="font-bold text-slate-900 mt-2 mb-1">{b.title}</h2>
              <p className="text-sm text-slate-600">{b.text}</p>
            </div>
          ))}
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
            {page.phases.map((phase, i) => (
              <div key={phase.label} className="rounded-2xl border border-slate-200 p-6">
                <span className="text-sm font-black text-blue-600">Étape {phase.label}</span>
                <h3 className="font-bold text-lg text-slate-900 mt-2 mb-2">{phase.title}</h3>
                <p className="text-sm text-slate-600">{phase.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-extrabold text-center mb-8">FAQ</h2>
          <div className="space-y-3">
            {page.faqs.map((f) => (
              <details key={f.q} className="bg-white border border-slate-200 rounded-xl px-5 open:border-blue-200">
                <summary className="py-4 font-semibold cursor-pointer list-none">{f.q}</summary>
                <p className="text-sm text-slate-600 pb-4">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="py-10 px-4 bg-surface border-t">
          <div className="max-w-7xl mx-auto flex flex-wrap gap-3 justify-center">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/expertises/${o.slug}`}
                className="text-sm font-bold text-blue-700 bg-blue-50 px-4 py-2 rounded-full hover:bg-blue-100"
              >
                {o.shortTitle} →
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingCTA />
    </>
  );
}
