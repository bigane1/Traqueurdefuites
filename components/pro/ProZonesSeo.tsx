type Group = { title: string; depts: string; text: string };

export default function ProZonesSeo({ groups }: { groups: Group[] }) {
  return (
    <section id="zones" className="py-20 px-4 bg-[var(--pro-ink)] text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="pro-display text-3xl sm:text-4xl font-extrabold mb-4">
          Où intervenons-nous ?
        </h2>
        <p className="text-white/70 max-w-2xl mb-12">
          Recherche de fuite à Tours, débouchage à Blois, plomberie d&apos;urgence à Poitiers, Le Mans,
          Orléans, Angers, Bourges… Une équipe mobile avec matériel haute technologie.
        </p>
        <div className="grid lg:grid-cols-3 gap-6">
          {groups.map((g) => (
            <article
              key={g.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
            >
              <h3 className="pro-display text-xl font-bold text-teal-300 mb-1">{g.title}</h3>
              <p className="text-xs font-bold uppercase tracking-wider text-white/50 mb-3">
                {g.depts}
              </p>
              <p className="text-sm leading-relaxed text-white/80">{g.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
