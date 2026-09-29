type Group = { title: string; depts: string; text: string };

const deptPills = ["37", "41", "86", "49", "36", "18", "72", "79", "45"];

export default function ZoneUltra({ groups }: { groups: Group[] }) {
  return (
    <section id="zones" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-4xl font-extrabold text-slate-900 mb-4">
              On arrive <span className="text-cyan-600">vite</span>, chez vous
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Centre-Val de Loire et départements voisins : une flotte mobile avec tout le matériel
              de détection. Un seul numéro pour planifier ou déclencher une urgence.
            </p>
            <div className="flex flex-wrap gap-2">
              {deptPills.map((d) => (
                <span
                  key={d}
                  className="font-display font-bold text-sm px-4 py-2 rounded-full bg-slate-900 text-white"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
          <ul className="space-y-4">
            {groups.map((g) => (
              <li
                key={g.title}
                className="rounded-2xl border border-slate-200 p-6 hover:border-cyan-300 hover:shadow-md transition-all bg-surface/50"
              >
                <h3 className="font-display font-bold text-lg text-slate-900">{g.title}</h3>
                <p className="text-xs font-bold text-cyan-700 mt-1 mb-2">{g.depts}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{g.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
