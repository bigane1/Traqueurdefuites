import type { SiteContent } from "@/lib/site-content";

export default function ZoneCards({ groups }: { groups: SiteContent["zoneGroups"] }) {
  return (
    <section className="py-20 px-4 bg-slate-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-ink mb-3">Où nous intervenons</h2>
        <p className="text-slate-600 mb-10 max-w-2xl">
          Huit départements, une même promesse : diagnostic précis et intervention rapide,
          de Saint-Pierre-des-Corps jusqu&apos;au Mans, Niort ou Orléans.
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          {groups.map((g) => (
            <article
              key={g.title}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
            >
              <p className="text-gold-bright font-black text-lg mb-1">{g.depts}</p>
              <h3 className="font-bold text-ink mb-2">{g.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{g.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
