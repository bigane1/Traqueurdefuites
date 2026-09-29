const steps = [
  {
    title: "Vous appelez",
    text: "Diagnostic téléphonique immédiat. On priorise l'urgence et le créneau.",
    icon: "📞",
  },
  {
    title: "On localise",
    text: "Gaz traceur, thermique, acoustique ou caméra — sans ouvrir au hasard.",
    icon: "🎯",
  },
  {
    title: "Vous respirez",
    text: "Compte-rendu clair, réparation ciblée, logement préservé.",
    icon: "✨",
  },
];

export default function ProcessUltra() {
  return (
    <section className="py-24 px-4 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-aurora opacity-50" />
      <div className="max-w-7xl mx-auto relative">
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-center mb-4">
          Simple. Rapide. <span className="text-cyan-400">Sans mauvaise surprise.</span>
        </h2>
        <p className="text-center text-slate-400 max-w-lg mx-auto mb-16">
          Un parcours pensé pour les urgences du quotidien — chez vous ou en copropriété.
        </p>
        <ol className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
          {steps.map((s, i) => (
            <li key={s.title} className="text-center relative">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-2xl shadow-lg shadow-cyan-500/30 mb-6">
                {s.icon}
              </div>
              <span className="text-xs font-bold text-cyan-400/80">Étape {i + 1}</span>
              <h3 className="font-display text-xl font-bold mt-1 mb-2">{s.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed px-4">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
