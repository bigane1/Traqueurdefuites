import type { SiteContent } from "@/lib/site-content";

export default function ZoneSection({ groups }: { groups: SiteContent["zoneGroups"] }) {
  return (
    <section className="py-24 px-4 bg-indigo-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 mesh-hero opacity-60" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <span className="inline-block bg-white/10 text-violet-200 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Zones
          </span>
          <h2 className="text-4xl font-black mb-4">8 départements couverts</h2>
          <p className="text-violet-200/90 max-w-2xl mx-auto">
            Particuliers, syndics et agences — déplacement 24h/24 avec matériel de diagnostic.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {groups.map((g) => (
            <article
              key={g.title}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition"
            >
              <p className="text-emerald-300 font-black text-xl mb-1">{g.depts}</p>
              <h3 className="font-bold text-lg mb-2">{g.title}</h3>
              <p className="text-sm text-violet-100/80 leading-relaxed">{g.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
