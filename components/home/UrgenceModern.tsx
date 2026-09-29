import { TEL_DISPLAY, telHref } from "@/lib/contact";

export default function UrgenceModern() {
  return (
    <div id="urgence" className="relative z-20 -mt-6 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto rounded-2xl bg-gradient-to-r from-red-600 via-rose-500 to-orange-500 p-[1px] shadow-2xl shadow-rose-500/20">
        <div className="rounded-2xl bg-slate-950/95 backdrop-blur px-6 py-4 flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
          <p className="text-white font-semibold flex items-center gap-2">
            <span className="animate-pulse-soft">🚨</span>
            Fuite d&apos;eau · Canalisation bouchée · Intervention rapide
          </p>
          <a href={telHref} className="text-2xl font-extrabold text-amber-300 hover:text-white transition">
            {TEL_DISPLAY}
          </a>
          <span className="text-xs text-slate-400 font-medium">24h/24 — 7j/7</span>
        </div>
      </div>
    </div>
  );
}
