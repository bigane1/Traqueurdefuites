import Link from "next/link";
import type { ExpertisePage } from "@/lib/site-content";

const meta: Record<string, { icon: string; tag: string; iconBg: string; tagClass: string }> = {
  "recherche-fuite": {
    icon: "💧",
    tag: "Priorité",
    iconBg: "bg-violet-50",
    tagClass: "bg-violet-100 text-violet-800 border-violet-200",
  },
  "debouchage-curage": {
    icon: "🚽",
    tag: "Urgence",
    iconBg: "bg-rose-50",
    tagClass: "bg-rose-100 text-rose-800 border-rose-200",
  },
  "inspection-video": {
    icon: "📹",
    tag: "Diagnostic",
    iconBg: "bg-indigo-50",
    tagClass: "bg-indigo-100 text-indigo-800 border-indigo-200",
  },
  canalisations: {
    icon: "♻️",
    tag: "Réseau",
    iconBg: "bg-emerald-50",
    tagClass: "bg-emerald-100 text-emerald-800 border-emerald-200",
  },
};

export default function ExpertiseServices({ items }: { items: ExpertisePage[] }) {
  return (
    <section id="expertises" className="py-24 px-4 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 mb-16 items-end">
          <div>
            <span className="inline-block bg-brand-soft text-violet-800 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Expertises
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight">
              Fuites & canalisations, une équipe dédiée
            </h2>
          </div>
          <p className="text-lg text-slate-500 lg:text-right lg:max-w-md lg:ml-auto">
            Quatre métiers complémentaires — localiser, déboucher, filmer et entretenir sans
            destruction inutile.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((s) => {
            const m = meta[s.slug] ?? meta["recherche-fuite"];
            return (
              <Link
                key={s.slug}
                href={`/expertises/${s.slug}`}
                className="group flex flex-col card-modern p-4 hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-1 transition-all duration-300 border-violet-100/80"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.heroImage}
                  alt={s.heroImageAlt}
                  className="w-full h-36 object-cover rounded-2xl mb-4"
                />
                <div className="flex items-start justify-between gap-3 mb-3 px-1">
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center text-xl ${m.iconBg}`}
                  >
                    {m.icon}
                  </div>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-full border ${m.tagClass}`}
                  >
                    {m.tag}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2 leading-snug px-1 group-hover:text-violet-700 transition-colors">
                  {s.shortTitle}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1 px-1 line-clamp-3">
                  {s.description}
                </p>
                <div className="mt-4 flex items-center text-violet-700 text-xs font-bold px-1">
                  En savoir plus
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 card-modern p-2 md:p-3 border-0 shadow-none bg-transparent">
          <div className="rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 bg-gradient-to-br from-violet-900 via-indigo-900 to-slate-900 text-white overflow-hidden relative">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl" />
            <div className="text-5xl flex-shrink-0 relative">🔬</div>
            <div className="flex-1 text-center md:text-left relative">
              <div className="inline-block bg-emerald-500 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2">
                Sans casse
              </div>
              <h3 className="text-2xl font-black mb-2">Recherche de fuite non destructive</h3>
              <p className="text-violet-200 text-sm">
                Traceur, ultrasons, thermique —{" "}
                <strong className="text-white">localisez avant de casser</strong>.
              </p>
            </div>
            <Link
              href="/expertises/recherche-fuite"
              className="relative flex-shrink-0 bg-cta hover:bg-rose-700 text-white font-bold px-6 py-3 rounded-2xl transition-all hover:-translate-y-0.5 shadow-lg text-sm whitespace-nowrap"
            >
              Voir la méthode →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
