import type { SiteContent } from "@/lib/site-content";

export default function ZoneModern({ groups }: { groups: SiteContent["zoneGroups"] }) {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Zones d&apos;intervention</h2>
          <p className="text-slate-500 mt-2">8 départements — déplacement rapide avec matériel de pointe.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {groups.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl p-6 bg-gradient-to-br from-slate-50 to-blue-50/50 border border-slate-200 hover:border-blue-200 transition"
            >
              <p className="text-2xl font-black text-blue-600 mb-1">{g.depts}</p>
              <h3 className="font-bold text-slate-900 mb-2">{g.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{g.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
