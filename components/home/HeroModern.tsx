import Link from "next/link";
import type { SiteContent } from "@/lib/site-content";
import { TEL_DISPLAY, telHref, whatsappHref } from "@/lib/contact";

export default function HeroModern({ content }: { content: SiteContent }) {
  const thumbs = content.expertises.slice(0, 3);

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-bg-deep">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={content.heroImage}
          alt={content.heroImageAlt}
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/90 to-slate-900/80" />
        <div className="absolute inset-0 bg-grid-modern opacity-40" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 lg:pt-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 glass text-emerald-200 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-soft" />
              {content.heroEyebrow}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.08] tracking-tight mb-6">
              <span className="gradient-heading block">{content.heroTitle}</span>
            </h1>

            <p className="text-lg text-slate-300/95 leading-relaxed mb-8 max-w-xl">
              {content.heroLead}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-8">
              <a
                href={telHref}
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold text-base px-7 py-4 rounded-2xl shadow-xl shadow-orange-500/25 transition-all hover:-translate-y-0.5"
              >
                <span className="text-xl">📞</span>
                <span>
                  <span className="block text-[10px] font-normal opacity-90">Appel gratuit</span>
                  {TEL_DISPLAY}
                </span>
              </a>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-4 rounded-2xl transition-all hover:-translate-y-0.5"
              >
                WhatsApp
              </a>
              <Link
                href="/demande-intervention"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-4 rounded-2xl transition-all hover:-translate-y-0.5"
              >
                Devis en ligne
              </Link>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Sans casse", "Gaz traceur & caméra", "8 départements", "Devis gratuit"].map(
                (t) => (
                  <span key={t} className="text-xs font-medium text-slate-300 glass px-3 py-1.5 rounded-full">
                    ✓ {t}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="space-y-4 animate-fade-up [animation-delay:120ms]">
            <div className="grid grid-cols-2 gap-3">
              {content.stats.map((s) => (
                <div key={s.label} className="glass rounded-2xl p-4 text-center hover:bg-white/10 transition">
                  <p className="text-2xl font-extrabold text-white">{s.value}</p>
                  <p className="text-[10px] text-slate-400 mt-1 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2">
              {thumbs.map((t) => (
                <Link
                  key={t.slug}
                  href={`/expertises/${t.slug}`}
                  className="relative h-28 rounded-xl overflow-hidden group ring-1 ring-white/10"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.heroImage}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent" />
                  <span className="absolute bottom-1.5 inset-x-1 text-[9px] font-bold text-white text-center leading-tight">
                    {t.shortTitle}
                  </span>
                </Link>
              ))}
            </div>
            <div className="rounded-2xl p-4 flex gap-3 items-center bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-orange-400/30">
              <span className="text-3xl">🚨</span>
              <div>
                <p className="text-white font-bold text-sm">Urgence fuite ou WC bouché</p>
                <a href={telHref} className="text-orange-300 font-extrabold hover:text-white text-lg">
                  {TEL_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
