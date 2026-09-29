import { TEL_DISPLAY, telHref } from "@/lib/contact";

export default function UrgenceBand() {
  return (
    <div id="urgence" className="px-4 py-6 bg-surface">
      <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-r from-violet-700 via-fuchsia-600 to-rose-600 text-white py-5 px-6 shadow-lg shadow-violet-500/20">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2 font-semibold">
            <span className="text-xl">🚨</span>
            <span>Fuite d&apos;eau ? WC bouché ? On intervient vite.</span>
          </div>
          <span className="hidden sm:block text-white/50">|</span>
          <a
            href={telHref}
            className="text-2xl font-black tracking-wide underline-offset-4 hover:underline"
          >
            {TEL_DISPLAY}
          </a>
          <span className="text-sm text-white/90 font-medium">24h/24 · 7j/7</span>
        </div>
      </div>
    </div>
  );
}
