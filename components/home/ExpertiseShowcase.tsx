import Link from "next/link";
import type { ExpertisePage } from "@/lib/site-content";

export default function ExpertiseShowcase({ items }: { items: ExpertisePage[] }) {
  const [main, ...rest] = items;

  return (
    <section id="metiers" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 max-w-2xl">
          <div className="accent-bar mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Quatre métiers, une même exigence
          </h2>
          <p className="mt-3 text-stone-600">
            Pas une liste de prestations génériques : chaque intervention est pensée diagnostic
            d&apos;abord, casse minimale ensuite.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {main && (
            <Link
              href={`/expertises/${main.slug}`}
              className="lg:col-span-7 group relative min-h-[320px] overflow-hidden bg-stone-900 text-white"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={main.heroImage}
                alt={main.heroImageAlt}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition duration-700"
              />
              <div className="relative p-8 sm:p-10 flex flex-col justify-end min-h-[320px] bg-gradient-to-t from-stone-950/95 via-stone-950/40 to-transparent">
                <span className="text-accent-soft text-xs font-bold uppercase tracking-widest mb-2">
                  {main.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">{main.shortTitle}</h3>
                <p className="text-stone-300 text-sm max-w-md mb-4">{main.subtitle}</p>
                <span className="text-sm font-bold text-accent-soft group-hover:underline">
                  Explorer cette expertise
                </span>
              </div>
            </Link>
          )}

          <ul className="lg:col-span-5 flex flex-col divide-y divide-stone-200 border border-stone-200">
            {rest.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/expertises/${item.slug}`}
                  className="flex gap-4 p-5 hover:bg-stone-bg transition group"
                >
                  <span className="text-2xl shrink-0 opacity-80">→</span>
                  <div>
                    <h3 className="font-bold text-stone-900 group-hover:text-accent transition">
                      {item.shortTitle}
                    </h3>
                    <p className="text-sm text-stone-500 mt-1 line-clamp-2">{item.description}</p>
                  </div>
                </Link>
              </li>
            ))}
            <li className="p-5 bg-stone-bg">
              <Link
                href="/demande-intervention"
                className="text-sm font-bold text-stone-900 underline underline-offset-4 decoration-accent"
              >
                Demande d&apos;intervention ou devis →
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
