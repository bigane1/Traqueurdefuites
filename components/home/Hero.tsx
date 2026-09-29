import Link from "next/link";
import type { SiteContent } from "@/lib/site-content";
import { TEL_DISPLAY, telHref, whatsappHref } from "@/lib/contact";

export default function Hero({ content }: { content: SiteContent }) {
  const highlights = content.expertises.slice(0, 3).map((e) => ({
    src: e.heroImage,
    alt: e.heroImageAlt,
    label: e.shortTitle,
  }));

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-indigo-950">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={content.heroImage}
          alt={content.heroImageAlt}
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/95 via-violet-950/90 to-slate-950/80 mesh-hero" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-400/30 text-emerald-200 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {content.heroEyebrow}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.08] mb-6">
            <span className="gradient-text block">{content.heroTitle}</span>
          </h1>

          <p className="text-lg text-violet-100/90 leading-relaxed mb-8 max-w-xl">{content.heroLead}</p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-8">
            <a
              href={telHref}
              className="group flex items-center justify-center gap-3 bg-cta hover:bg-rose-700 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all hover:-translate-y-1 shadow-xl shadow-rose-900/30"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform">📞</span>
              <div className="text-left">
                <div className="text-xs font-normal opacity-90">Urgence 24h/24</div>
                <div>{TEL_DISPLAY}</div>
              </div>
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-2xl transition-all hover:-translate-y-1"
            >
              WhatsApp
            </a>
            <Link
              href="/demande-intervention"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold px-8 py-4 rounded-2xl backdrop-blur-sm transition-all hover:-translate-y-1"
            >
              <span className="text-xl">📋</span>
              Devis
            </Link>
          </div>

          <div className="flex flex-wrap gap-2">
            {["Sans casse", "Gaz traceur", "Caméra HD", "8 départements"].map((b) => (
              <span
                key={b}
                className="text-sm text-violet-100 bg-violet-500/10 border border-violet-400/20 px-3 py-1.5 rounded-full font-medium"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            {content.stats.map((s) => (
              <div
                key={s.label}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-3 sm:p-4 text-center"
              >
                <div className="text-xl sm:text-2xl font-black text-white mb-0.5">{s.value}</div>
                <div className="text-[9px] sm:text-[10px] text-violet-200/80 font-medium leading-tight">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-3">
            {highlights.map((h) => (
              <div key={h.label} className="relative rounded-2xl overflow-hidden h-32 sm:h-36 group ring-2 ring-violet-500/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={h.src}
                  alt={h.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/90 to-transparent" />
                <div className="absolute bottom-2 left-0 right-0 text-center text-white text-[10px] sm:text-xs font-bold px-1">
                  {h.label}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl p-5 flex items-center gap-4 bg-gradient-to-r from-violet-600/30 to-emerald-600/20 border border-white/15 backdrop-blur-md">
            <div className="text-4xl flex-shrink-0">💧</div>
            <div>
              <div className="text-white font-black text-base">Fuite invisible ?</div>
              <div className="text-emerald-200 text-sm mb-1">Diagnostic non destructif</div>
              <Link
                href="/expertises/recherche-fuite"
                className="text-rose-200 hover:text-white font-bold text-sm underline underline-offset-2"
              >
                Voir la recherche de fuite →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#urgence"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors animate-bounce-down"
        aria-label="Défiler"
      >
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path
            d="M12 5v14M5 12l7 7 7-7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </section>
  );
}
