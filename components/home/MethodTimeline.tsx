import { TEL_DISPLAY, telHref } from "@/lib/contact";

const steps = [
  {
    title: "Vous décrivez le problème",
    text: "Fuite, bouchon, doute sur le réseau — nous qualifions l'urgence au téléphone.",
  },
  {
    title: "Diagnostic adapté",
    text: "Traceur, caméra ou curage : la bonne méthode, pas la plus invasive.",
  },
  {
    title: "Intervention ciblée",
    text: "Réparation localisée, compte-rendu pour assurance ou syndic si besoin.",
  },
];

export default function MethodTimeline() {
  return (
    <section className="py-20 px-4 bg-stone-900 text-stone-300">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <div className="w-12 h-1 bg-accent mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Notre façon de travailler
          </h2>
          <p className="text-stone-400 mb-8 max-w-md">
            Un parcours linéaire, sans jargon — vous savez quoi attendre avant notre arrivée sur
            place.
          </p>
          <a
            href={telHref}
            className="inline-block text-sm font-bold text-stone-900 bg-accent-soft px-5 py-3 hover:bg-amber-200 transition"
          >
            Parler à un technicien · {TEL_DISPLAY}
          </a>
        </div>

        <ol className="relative border-l-2 border-stone-700 pl-8 space-y-10">
          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              <span className="absolute -left-[2.35rem] top-0 w-8 h-8 rounded-full bg-accent text-stone-900 text-sm font-black flex items-center justify-center">
                {i + 1}
              </span>
              <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
              <p className="text-sm leading-relaxed">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
