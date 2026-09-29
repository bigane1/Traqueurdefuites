const items = [
  "Recherche de fuite sans casse",
  "Intervention 24h/24 · 7j/7",
  "Gaz traceur & thermique",
  "8 départements",
  "Devis transparent",
  "Particuliers & syndics",
  "Tours · Blois · Poitiers",
  "Débouchage haute pression",
];

export default function MarqueeUltra() {
  const loop = [...items, ...items];

  return (
    <div className="relative border-y border-white/10 bg-slate-950 overflow-hidden py-3">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10" />
      <div className="flex animate-marquee whitespace-nowrap w-max gap-10">
        {loop.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="text-sm font-semibold text-white/70 flex items-center gap-10"
          >
            <span className="text-cyan-400">◆</span>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
