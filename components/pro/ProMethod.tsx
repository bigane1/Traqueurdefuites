const steps = [
  {
    n: "01",
    title: "Écoute & qualification",
    text: "Par téléphone ou formulaire : nature de la fuite, urgence, accès au logement. Conseils immédiats si besoin.",
  },
  {
    n: "02",
    title: "Diagnostic sur place",
    text: "Gaz traceur, thermique, acoustique ou caméra : nous cartographions la zone sans ouvrir inutilement murs ou sols.",
  },
  {
    n: "03",
    title: "Compte-rendu & réparation",
    text: "Rapport clair pour vous et votre assurance. Réparation ciblée ou orientation vers un corps de métier partenaire.",
  },
];

export default function ProMethod() {
  return (
    <section className="py-20 px-4 bg-[var(--pro-surface)] border-y border-[var(--pro-line)]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <h2 className="pro-display text-3xl font-extrabold text-[var(--pro-ink)]">
              Comment se déroule une intervention ?
            </h2>
            <p className="mt-3 max-w-lg">
              Processus transparent, pensé pour limiter le stress et les coûts de remise en état.
            </p>
          </div>
          <p className="text-sm font-medium text-[var(--pro-accent-dark)] bg-[var(--pro-highlight)] px-4 py-2 rounded-full">
            Délai moyen de localisation : moins d&apos;1 h en urgence
          </p>
        </div>
        <ol className="grid lg:grid-cols-3 gap-6">
          {steps.map((s) => (
            <li
              key={s.n}
              className="bg-white rounded-3xl p-8 border border-[var(--pro-line)]"
            >
              <span className="pro-display text-4xl font-black text-teal-100">{s.n}</span>
              <h3 className="pro-display text-xl font-bold text-[var(--pro-ink)] mt-4 mb-2">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
