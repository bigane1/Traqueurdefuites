const items = [
  { title: "4,9 / 5", sub: "Avis clients Google" },
  { title: "Sans casse", sub: "Diagnostic non destructif" },
  { title: "7j/7 · 24h/24", sub: "Fuites & débouchage urgents" },
  { title: "Devis clair", sub: "Avant intervention" },
];

export default function ProTrustStrip() {
  return (
    <section aria-label="Garanties" className="border-b border-[var(--pro-line)] bg-[var(--pro-ink)] text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.title} className="text-center lg:text-left">
            <p className="pro-display text-xl sm:text-2xl font-bold text-teal-300">{item.title}</p>
            <p className="text-sm text-white/70 mt-1">{item.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
