import { TEL_DISPLAY, telHref } from "@/lib/contact";

const steps = [
  {
    n: "01",
    title: "Appel & diagnostic",
    desc: "Vous expliquez la situation. Nous estimons l'urgence et le type d'intervention.",
    grad: "from-blue-500 to-blue-700",
  },
  {
    n: "02",
    title: "Intervention sur site",
    desc: "Matériel pro : traceur, caméra, hydrocurage. Méthode la moins invasive possible.",
    grad: "from-violet-500 to-purple-700",
  },
  {
    n: "03",
    title: "Résultat & transparence",
    desc: "Compte-rendu clair, tarif annoncé. Particuliers, syndics et assurances.",
    grad: "from-emerald-500 to-teal-600",
  },
];

export default function ProcessModern() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-4 py-1.5 rounded-full">
            Simple & clair
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">Comment ça se passe ?</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.grad} text-white font-black flex items-center justify-center mb-5 shadow-lg`}
              >
                {s.n}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-10">
          <a
            href={telHref}
            className="inline-flex font-bold text-blue-600 hover:text-blue-800 underline-offset-4 hover:underline"
          >
            Une question ? Appelez le {TEL_DISPLAY}
          </a>
        </p>
      </div>
    </section>
  );
}
