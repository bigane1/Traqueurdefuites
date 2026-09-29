const values = [
  {
    emoji: "🔬",
    title: "Technologie de pointe",
    text: "Thermique, ultrasons, gaz traceur : le bon outil pour chaque fuite.",
  },
  {
    emoji: "💎",
    title: "Transparence totale",
    text: "Chaque étape expliquée avant d'intervenir. Vous gardez la main.",
  },
  {
    emoji: "🌿",
    title: "Moins de gaspillage",
    text: "Préserver l'eau et éviter les démolitions inutiles, c'est notre engagement.",
  },
  {
    emoji: "🤝",
    title: "Humain avant tout",
    text: "Syndics, agences ou particuliers : même écoute, même réactivité.",
  },
];

export default function ValuesUltra() {
  return (
    <section className="py-20 px-4 border-y border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((v) => (
          <div key={v.title} className="group">
            <span className="text-3xl block mb-4 group-hover:scale-110 transition-transform origin-left">
              {v.emoji}
            </span>
            <h3 className="font-display font-bold text-slate-900 text-lg mb-2">{v.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{v.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
