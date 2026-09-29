import Link from "next/link";
import type { ExpertisePage } from "@/lib/site-content";
import { SERVICE_NAV } from "@/lib/navigation";

const tagColors = [
  "bg-blue-500/10 text-blue-700 border-blue-200",
  "bg-orange-500/10 text-orange-700 border-orange-200",
  "bg-violet-500/10 text-violet-700 border-violet-200",
  "bg-sky-500/10 text-sky-700 border-sky-200",
  "bg-amber-500/10 text-amber-700 border-amber-200",
  "bg-red-500/10 text-red-700 border-red-200",
  "bg-emerald-500/10 text-emerald-700 border-emerald-200",
];

function serviceMeta(slug: string, index: number) {
  const nav = SERVICE_NAV.find((s) => s.slug === slug);
  return {
    icon: nav?.icon ?? "🔧",
    label: index === 0 ? "Priorité" : "Service",
    color: tagColors[index % tagColors.length],
  };
}

export default function ServicesGrid({ items }: { items: ExpertisePage[] }) {
  const order: string[] = SERVICE_NAV.map((s) => s.slug);
  const sorted = [...items].sort(
    (a, b) => order.indexOf(a.slug) - order.indexOf(b.slug)
  );

  return (
    <section id="services" className="py-24 px-4 bg-surface bg-grid-modern">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full mb-4">
            Nos expertises
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Tout pour vos fuites & canalisations
          </h2>
          <p className="text-slate-500 text-lg">
            Recherche non destructive, débouchage, caméra et entretien — une équipe, un standard de
            qualité.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {sorted.map((s, index) => {
            const m = serviceMeta(s.slug, index);
            return (
              <Link
                key={s.slug}
                href={`/expertises/${s.slug}`}
                className="group flex flex-col bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.heroImage}
                  alt={s.heroImageAlt}
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
                <div className="flex justify-between items-start mb-2 px-0.5">
                  <span className="text-2xl">{m.icon}</span>
                  <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full border ${m.color}`}>
                    {m.label}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 group-hover:text-blue-700 transition mb-2">
                  {s.shortTitle}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed flex-1 line-clamp-3">{s.description}</p>
                <span className="mt-4 text-sm font-bold text-blue-600 flex items-center gap-1">
                  Détails <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 rounded-3xl overflow-hidden bg-slate-900 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="text-5xl relative">🔬</div>
          <div className="flex-1 text-center md:text-left relative">
            <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">Technologie</p>
            <h3 className="text-2xl font-extrabold text-white mb-2">Recherche de fuite sans destruction</h3>
            <p className="text-slate-400 text-sm max-w-lg">
              Gaz traceur, ultrasons, thermique — localisez avant de casser murs et sols.
            </p>
          </div>
          <Link
            href="/expertises/recherche-fuite"
            className="relative shrink-0 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-orange-500/30 transition"
          >
            En savoir plus →
          </Link>
        </div>
      </div>
    </section>
  );
}
