const items = [
  {
    icon: "🎯",
    title: "Réparer sans casser",
    desc: "Localisation précise pour limiter démolition et remise en état.",
    highlight: true,
  },
  {
    icon: "💬",
    title: "Devis & transparence",
    desc: "Tarif annoncé avant intervention, explications à chaque étape.",
    highlight: true,
  },
  {
    icon: "📋",
    title: "Assurances & pros",
    desc: "Rapports pour syndics, agences et sinistres.",
  },
  {
    icon: "⚡",
    title: "24h/24 — 7j/7",
    desc: "Fuites et urgences sanitaires : équipe joignable en permanence.",
  },
  {
    icon: "🔬",
    title: "Matériel pro",
    desc: "Traceur, thermique, caméra HD, hydrocurage.",
  },
  {
    icon: "🌱",
    title: "Approche responsable",
    desc: "Moins de gaspillage d'eau et de travaux inutiles.",
  },
  {
    icon: "🤝",
    title: "Service humain",
    desc: "Écoute et suivi avant, pendant et après l'intervention.",
  },
  {
    icon: "📍",
    title: "8 départements",
    desc: "Saint-Pierre-des-Corps — Tours, Blois, Poitiers, Le Mans…",
  },
];

export default function Engagements() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-water-soft text-emerald-800 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Engagements
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
            Pourquoi Traqueur de Fuites ?
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Précision, réactivité et respect de votre logement.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((e) => (
            <div
              key={e.title}
              className={`rounded-3xl p-6 transition-all hover:-translate-y-1 ${
                e.highlight
                  ? "bg-gradient-to-br from-violet-700 to-indigo-900 text-white shadow-lg shadow-violet-500/20"
                  : "card-modern border-slate-200/80 hover:shadow-violet-500/10"
              }`}
            >
              <div className="text-3xl mb-3">{e.icon}</div>
              <h3 className={`font-bold mb-2 ${e.highlight ? "text-white" : "text-slate-900"}`}>
                {e.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${e.highlight ? "text-violet-100" : "text-slate-500"}`}
              >
                {e.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
