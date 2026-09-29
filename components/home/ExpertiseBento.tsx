import Link from "next/link";
import type { ExpertisePage } from "@/lib/site-content";

export default function ExpertiseBento({ items }: { items: ExpertisePage[] }) {
  const pillars = items.filter((e) => e.pillar);

  return (
    <section id="expertises" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="text-ocean font-bold text-sm uppercase tracking-widest mb-2">
              Nos activités phares
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink">
              Quatre réponses à vos urgences d&apos;eau
            </h2>
          </div>
          <p className="text-slate-600 max-w-md text-sm leading-relaxed">
            Contrairement à un site généraliste « plomberie », chaque parcours est pensé
            autour du diagnostic, de la canalisation et de la fuite.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {pillars.map((item, index) => (
            <Link
              key={item.slug}
              href={`/expertises/${item.slug}`}
              className={`group relative rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 hover:border-cyan-300 hover:shadow-lg transition overflow-hidden ${
                index === 0 ? "md:col-span-2 md:grid md:grid-cols-2 md:gap-8 md:items-center" : ""
              }`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition`}
              />
              <div className="relative">
                <span className="text-xs font-bold uppercase tracking-wider text-ocean">
                  {item.badge}
                </span>
                <h3 className="text-xl font-bold text-ink mt-2 mb-2">{item.shortTitle}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.description}</p>
                <ul className="flex flex-wrap gap-2 mb-4">
                  {item.highlights.slice(0, 3).map((h) => (
                    <li
                      key={h}
                      className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-md"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
                <span className="text-sm font-bold text-ocean group-hover:text-sky-700">
                  Voir le détail →
                </span>
              </div>
              {index === 0 && (
                <div className="relative mt-6 md:mt-0 rounded-xl overflow-hidden aspect-video md:aspect-[4/3]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.heroImage}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
