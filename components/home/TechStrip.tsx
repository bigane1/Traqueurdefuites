const tools = [
  { name: "Gaz traceur", desc: "Fuites invisibles sur réseau pressurisé" },
  { name: "Ultrasons & acoustique", desc: "Micro-fuites et bruits encastrés" },
  { name: "Thermique", desc: "Cartographie des zones humides" },
  { name: "Caméra HD", desc: "État intérieur des canalisations" },
];

export default function TechStrip() {
  return (
    <section className="bg-sky-950 text-white py-14 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-2xl font-bold mb-10">
          La technologie au service de <span className="text-cyan-300">moins de casse</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
            >
              <p className="font-bold text-cyan-200 mb-1">{t.name}</p>
              <p className="text-sm text-slate-300">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
