import { TEL_DISPLAY, telHref } from "@/lib/contact";

const steps = [
  {
    num: "01",
    icon: "📞",
    title: "Appel & qualification",
    desc: `Au ${TEL_DISPLAY}, nous identifions fuite, bouchon ou besoin caméra.`,
    color: "from-violet-600 to-indigo-700",
  },
  {
    num: "02",
    icon: "🔍",
    title: "Diagnostic sur place",
    desc: "Tests non destructifs ou vidéo — vous savez avant toute casse.",
    color: "from-fuchsia-500 to-rose-600",
  },
  {
    num: "03",
    icon: "✅",
    title: "Intervention ciblée",
    desc: "Réparation ou curage localisé, compte-rendu si besoin.",
    color: "from-emerald-500 to-teal-600",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-cta-soft text-rose-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Parcours client
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">3 étapes claires</h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Du premier contact à l&apos;intervention terminée.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div
              key={s.num}
              className="card-modern p-8 hover:-translate-y-1 transition-all border-violet-100"
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} text-white text-2xl mb-5 shadow-md`}
              >
                {s.icon}
              </div>
              <span className="text-xs font-black text-violet-400 uppercase tracking-widest">
                Étape {s.num}
              </span>
              <h3 className="text-xl font-black text-slate-900 mt-1 mb-3">{s.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={telHref}
            className="inline-flex items-center gap-2 bg-cta hover:bg-rose-700 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-rose-500/25 transition-all hover:-translate-y-0.5"
          >
            📞 Appeler {TEL_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
