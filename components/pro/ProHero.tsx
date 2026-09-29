import Link from "next/link";
import type { SiteContent } from "@/lib/site-content";
import { ADDRESS, TEL_DISPLAY, telHref, whatsappHref } from "@/lib/contact";

export default function ProHero({ content }: { content: SiteContent }) {
  return (
    <section className="pro-mesh border-b border-[var(--pro-line)]">
      <div className="max-w-6xl mx-auto px-4 pt-12 pb-16 lg:pt-16 lg:pb-24">
        <nav aria-label="Fil d'Ariane" className="text-xs text-[var(--pro-muted)] mb-8">
          <ol className="flex flex-wrap gap-1">
            <li>
              <Link href="/moderne" className="hover:text-[var(--pro-accent)]">
                Accueil
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-[var(--pro-ink)] font-medium">
              Recherche de fuite Tours &amp; Centre-Val de Loire
            </li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--pro-accent-dark)] mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--pro-accent)]" />
              Urgence 24h/24 · 8 départements
            </p>

            <h1 className="pro-display text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-[var(--pro-ink)] leading-[1.05] mb-6">
              Recherche de fuite{" "}
              <span className="text-[var(--pro-accent-dark)]">sans casser</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold mt-3 text-[var(--pro-muted)]">
                à Tours, Blois, Poitiers &amp; région
              </span>
            </h1>

            <p className="text-lg leading-relaxed max-w-xl mb-8">{content.heroLead}</p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-10">
              <a
                href={telHref}
                className="inline-flex items-center justify-center gap-2 bg-[var(--pro-ink)] hover:bg-[var(--pro-accent-dark)] text-white font-bold px-8 py-4 rounded-full transition shadow-lg shadow-teal-900/10"
              >
                📞 {TEL_DISPLAY}
                <span className="text-white/70 font-normal text-sm hidden sm:inline">
                  — appel direct
                </span>
              </a>
              <Link
                href="/demande-intervention"
                className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-full border-2 border-[var(--pro-ink)] text-[var(--pro-ink)] hover:bg-[var(--pro-ink)] hover:text-white transition"
              >
                Devis gratuit en ligne
              </Link>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-semibold px-6 py-4 rounded-full text-[var(--pro-accent-dark)] bg-[var(--pro-highlight)] hover:bg-teal-100 transition"
              >
                WhatsApp
              </a>
            </div>

            <ul className="grid sm:grid-cols-3 gap-4">
              {content.stats.map((s) => (
                <li
                  key={s.label}
                  className="rounded-2xl border border-[var(--pro-line)] bg-white px-4 py-4 pro-ring"
                >
                  <p className="pro-display text-2xl font-extrabold text-[var(--pro-ink)]">
                    {s.value}
                  </p>
                  <p className="text-xs mt-1 leading-snug">{s.label}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden pro-ring aspect-[4/5] max-h-[520px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={content.heroImage}
                alt={content.heroImageAlt}
                className="absolute inset-0 w-full h-full object-cover"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--pro-ink)]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm font-semibold text-teal-200 mb-1">Intervention non destructive</p>
                <p className="text-lg font-bold leading-snug">
                  Gaz traceur · ultrasons · caméra thermique
                </p>
              </div>
            </div>

            <aside className="rounded-2xl border border-[var(--pro-line)] bg-white p-5 text-sm">
              <p className="font-bold text-[var(--pro-ink)] mb-2">Coordonnées &amp; zone</p>
              <p>{ADDRESS}</p>
              <p className="mt-2">
                Départements : <strong className="text-[var(--pro-ink)]">37, 41, 86, 49, 36, 18, 72, 79, 45</strong>
              </p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
