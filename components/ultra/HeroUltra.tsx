import Link from "next/link";
import type { SiteContent } from "@/lib/site-content";
import { TEL_DISPLAY, telHref, whatsappHref } from "@/lib/contact";

const badges = [
  "Sans destruction",
  "Rapport assurance",
  "Techniciens équipés",
  "Réponse immédiate",
];

export default function HeroUltra({ content }: { content: SiteContent }) {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-aurora">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-20 lg:pt-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-200 mb-8 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              {content.heroEyebrow}
            </div>

            <h1 className="font-display text-[2.35rem] sm:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.5rem] leading-[1.08] text-white mb-6">
              {(() => {
                const q = content.heroTitle.indexOf("?");
                if (q !== -1 && q < content.heroTitle.length - 1) {
                  return (
                    <>
                      <span className="block">{content.heroTitle.slice(0, q + 1).trim()}</span>
                      <span className="text-gradient-brand block mt-1">
                        {content.heroTitle.slice(q + 1).trim()}
                      </span>
                    </>
                  );
                }
                const words = content.heroTitle.split(" ");
                if (words.length > 4) {
                  return (
                    <>
                      <span className="block">{words.slice(0, 3).join(" ")}</span>
                      <span className="text-gradient-brand block mt-1">{words.slice(3).join(" ")}</span>
                    </>
                  );
                }
                return <span className="text-gradient-brand">{content.heroTitle}</span>;
              })()}
            </h1>

            <p className="text-lg sm:text-xl text-slate-300/95 leading-relaxed max-w-xl mb-10">
              {content.heroLead}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-10">
              <a
                href={telHref}
                className="btn-shimmer group relative flex items-center justify-center gap-3 text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-2xl shadow-orange-500/30 hover:-translate-y-1 transition-transform"
              >
                <span className="text-2xl">📞</span>
                <span className="text-left">
                  <span className="block text-[11px] font-normal opacity-90">Urgence 24h/24</span>
                  {TEL_DISPLAY}
                </span>
              </a>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-4 rounded-2xl transition-all hover:-translate-y-1 shadow-lg shadow-emerald-500/25"
              >
                WhatsApp direct
              </a>
              <Link
                href="/demande-intervention"
                className="flex items-center justify-center gap-2 border-2 border-white/25 hover:border-cyan-400/60 hover:bg-white/5 text-white font-bold px-8 py-4 rounded-2xl backdrop-blur-sm transition-all"
              >
                Devis gratuit
              </Link>
            </div>

            <div className="flex flex-wrap gap-2">
              {badges.map((b) => (
                <span
                  key={b}
                  className="text-xs sm:text-sm font-medium text-slate-200 bg-white/5 border border-white/10 px-3 py-2 rounded-full"
                >
                  ✓ {b}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/40 via-indigo-500/20 to-orange-500/30 rounded-[2rem] blur-3xl opacity-70" />
            <div className="relative card-glow rounded-[1.75rem] overflow-hidden rotate-1 hover:rotate-0 transition-transform duration-500">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={content.heroImage}
                alt={content.heroImageAlt}
                className="w-full aspect-[4/5] object-cover"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="grid grid-cols-2 gap-3">
                  {content.stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl bg-white/10 backdrop-blur-md border border-white/15 p-3 text-center"
                    >
                      <p className="font-display text-xl sm:text-2xl font-bold text-white">{s.value}</p>
                      <p className="text-[10px] sm:text-xs text-slate-300 leading-tight mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
