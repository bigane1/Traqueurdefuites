import type { SiteContent } from "@/lib/site-content";

export default function StatsRow({ stats }: { stats: SiteContent["stats"] }) {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-3xl font-black text-ocean">{s.value}</p>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
