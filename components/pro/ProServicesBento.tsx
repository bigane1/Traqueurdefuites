import Link from "next/link";
import type { ExpertisePage } from "@/lib/site-content";
import { SERVICE_NAV, serviceHref } from "@/lib/navigation";

export default function ProServicesBento({ items }: { items: ExpertisePage[] }) {
  const order: string[] = SERVICE_NAV.map((s) => s.slug);
  const sorted = [...items].sort(
    (a, b) => order.indexOf(a.slug) - order.indexOf(b.slug)
  );

  return (
    <section id="services" className="py-20 lg:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="max-w-2xl mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--pro-accent-dark)] mb-3">
            Nos prestations
          </p>
          <h2 className="pro-display text-3xl sm:text-4xl font-extrabold text-[var(--pro-ink)] mb-4">
            Plomberie, fuites &amp; canalisations en Centre-Val de Loire
          </h2>
          <p className="text-base leading-relaxed">
            Même gamme de services que sur notre site principal : détection précise, débouchage,
            entretien réseaux et dépannage d&apos;urgence — pour particuliers, syndics et pros.
          </p>
        </header>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {sorted.map((ex, i) => {
            const nav = SERVICE_NAV.find((s) => s.slug === ex.slug);
            const featured = i === 0;
            return (
              <li
                key={ex.slug}
                className={featured ? "md:col-span-2 lg:col-span-2" : undefined}
              >
                <Link
                  href={serviceHref(ex.slug)}
                  className={`group flex flex-col h-full rounded-3xl border border-[var(--pro-line)] bg-white p-6 lg:p-8 hover:border-[var(--pro-accent)] hover:shadow-xl hover:shadow-teal-900/5 transition-all ${
                    featured ? "lg:flex-row lg:items-center lg:gap-8 pro-ring" : ""
                  }`}
                >
                  <span className="text-3xl mb-4 lg:mb-0 shrink-0" aria-hidden>
                    {nav?.icon ?? "💧"}
                  </span>
                  <div className="flex-1">
                    <h3 className="pro-display text-xl font-bold text-[var(--pro-ink)] group-hover:text-[var(--pro-accent-dark)] mb-2">
                      {ex.shortTitle || ex.title}
                    </h3>
                    <p className="text-sm leading-relaxed line-clamp-3">{ex.subtitle}</p>
                    <span className="inline-flex items-center gap-1 mt-4 text-sm font-bold text-[var(--pro-accent-dark)]">
                      En savoir plus
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
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
