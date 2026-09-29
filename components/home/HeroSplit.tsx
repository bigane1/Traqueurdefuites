import Link from "next/link";
import type { SiteContent } from "@/lib/site-content";
import { telHref, whatsappHref } from "@/lib/contact";

export default function HeroSplit({ content }: { content: SiteContent }) {
  return (
    <section className="relative overflow-hidden bg-ink text-white pattern-grid">
      <div className="absolute inset-0 bg-gradient-to-br from-ink via-sky-950/80 to-ink pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-cyan-300 text-sm font-semibold tracking-wide uppercase mb-4">
            {content.heroEyebrow}
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] mb-6">
            <span className="text-gradient block">{content.heroTitle}</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-xl">
            {content.heroLead}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={telHref}
              className="inline-flex justify-center items-center font-bold bg-gold-bright text-ink px-6 py-3.5 rounded-xl hover:brightness-110 transition"
            >
              Urgence — appeler
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center font-semibold border border-emerald-400/50 text-emerald-300 px-6 py-3.5 rounded-xl hover:bg-emerald-500/10 transition"
            >
              Message WhatsApp
            </a>
            <Link
              href="/demande-intervention"
              className="inline-flex justify-center items-center font-semibold text-cyan-200 underline-offset-4 hover:underline px-2 py-3.5"
            >
              Demande écrite
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-500/10 aspect-[4/3]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={content.heroImage}
              alt={content.heroImageAlt}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-white text-ink rounded-xl px-4 py-3 shadow-lg text-sm font-semibold max-w-[220px]">
            4 expertises cœur de métier — sans casse inutile
          </div>
        </div>
      </div>
    </section>
  );
}
