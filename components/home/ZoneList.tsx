import type { SiteContent } from "@/lib/site-content";

export default function ZoneList({ groups }: { groups: SiteContent["zoneGroups"] }) {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="accent-bar mb-4" />
        <h2 className="text-3xl font-bold text-stone-900 mb-10">Secteur d&apos;intervention</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {groups.map((g) => (
            <div key={g.title}>
              <p className="font-mono text-sm font-bold text-accent mb-2">{g.depts}</p>
              <h3 className="font-bold text-stone-900 mb-2">{g.title}</h3>
              <p className="text-sm leading-relaxed">{g.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-sm text-stone-500 border-t border-stone-200 pt-8">
          Basés à Saint-Pierre-des-Corps (37) — déplacement avec matériel de diagnostic, y compris
          en urgence nocturne.
        </p>
      </div>
    </section>
  );
}
