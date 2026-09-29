const values = [
  { icon: "🛠️", title: "Technologie de pointe", desc: "Caméra thermique, gaz traceur, ultrasons — sans abîmer murs ni sols.", hot: true },
  { icon: "💬", title: "Fiabilité & transparence", desc: "Chaque étape expliquée, vous gardez le contrôle.", hot: true },
  { icon: "🌱", title: "Approche écologique", desc: "Préserver l'eau, limiter les destructions inutiles." },
  { icon: "🤝", title: "Service client humain", desc: "Écoute et accompagnement avant, pendant et après." },
  { icon: "⚡", title: "24h/24 — 7j/7", desc: "Urgences fuites et sanitaires." },
  { icon: "📍", title: "8 départements", desc: "Centre-Val de Loire et alentours." },
];

export default function ValuesModern() {
  return (
    <section className="py-24 px-4 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold tracking-tight">Pourquoi nous choisir ?</h2>
          <p className="text-slate-400 mt-3">Engagements concrets sur chaque intervention.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {values.map((v) => (
            <div
              key={v.title}
              className={`rounded-2xl p-6 transition hover:-translate-y-0.5 ${
                v.hot
                  ? "bg-gradient-to-br from-blue-600 to-blue-800 shadow-lg shadow-blue-900/50"
                  : "bg-white/5 border border-white/10 hover:bg-white/10"
              }`}
            >
              <span className="text-3xl">{v.icon}</span>
              <h3 className="font-bold mt-3 mb-1">{v.title}</h3>
              <p className={`text-sm ${v.hot ? "text-blue-100" : "text-slate-400"}`}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
