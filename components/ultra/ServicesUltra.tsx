import Link from "next/link";
import type { ExpertisePage } from "@/lib/site-content";
import { SERVICE_NAV, serviceHref } from "@/lib/navigation";

export default function ServicesUltra({ items }: { items: ExpertisePage[] }) {
  const order: string[] = SERVICE_NAV.map((s) => s.slug);
  const sorted = [...items].sort(
    (a, b) => order.indexOf(a.slug) - order.indexOf(b.slug)
  );

  return (
    <section id="services" className="py-24 lg:py-32 px-4 bg-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-cyan-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-700 mb-3">
              Expertises
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
              Toutes vos urgences
              <span className="block text-cyan-600">eau &amp; réseaux</span>
            </h2>
          </div>
          <p className="text-slate-600 max-w-md text-lg leading-relaxed">
            Fuites invisibles, canalisations bouchées, chauffage ou toiture : une équipe, du matériel pro,
            zéro casse inutile.
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {sorted.map((ex, i) => {
            const nav = SERVICE_NAV.find((s) => s.slug === ex.slug);
            const featured = i === 0;
            return (
              <li
                key={ex.slug}
                className={featured ? "sm:col-span-2" : ""}
              >
                <Link
                  href={serviceHref(ex.slug)}
                  className={`group relative flex flex-col h-full min-h-[280px] rounded-3xl overflow-hidden bg-slate-900 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ${
                    featured ? "min-h-[320px]" : ""
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ex.heroImage}
                    alt={ex.heroImageAlt}
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-900/30 group-hover:via-slate-950/60 transition-colors" />
                  <div className="relative mt-auto p-6 sm:p-8">
                    <span className="inline-block text-2xl mb-3" aria-hidden>
                      {nav?.icon}
                    </span>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-cyan-300 mb-2">
                      {ex.badge}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-snug mb-2 group-hover:text-cyan-200 transition-colors">
                      {ex.shortTitle || ex.title}
                    </h3>
                    <p className="text-sm text-slate-300 line-clamp-2 max-w-lg">{ex.subtitle}</p>
                    <span className="inline-flex items-center gap-2 mt-4 text-sm font-bold text-orange-400 group-hover:gap-3 transition-all">
                      Découvrir la prestation →
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
