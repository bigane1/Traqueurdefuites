import { TEL_DISPLAY, telHref } from "@/lib/contact";

export default function UrgenceUltra() {
  return (
    <div className="bg-gradient-to-r from-orange-500 via-orange-500 to-red-500 text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center sm:text-left text-sm font-semibold">
        <span className="animate-pulse-soft">🚨 Fuite ou WC bouché en cours ?</span>
        <a
          href={telHref}
          className="underline underline-offset-4 decoration-2 font-bold text-base sm:text-sm"
        >
          Appelez maintenant — {TEL_DISPLAY}
        </a>
      </div>
    </div>
  );
}
