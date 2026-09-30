"use client";

import Link from "next/link";
import { TEL_DISPLAY, telHref } from "@/lib/contact";
import BrandLogo from "@/components/BrandLogo";

type Props = {
  logoSrc?: string;
  logoAlt?: string;
};

/** En-tête style flyer — uniquement page mutualisation */
export default function MutualisationFlyerHeaderClient({ logoSrc, logoAlt }: Props) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 shadow-2xl shadow-black/40">
      <div className="relative bg-gradient-to-r from-red-800 via-red-600 to-red-800 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, transparent, transparent 8px, rgba(0,0,0,.08) 8px, rgba(0,0,0,.08) 16px)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-3 sm:px-6 py-2 flex flex-wrap items-center justify-between gap-2">
          <p className="flex items-center gap-2 text-white font-black text-sm sm:text-base uppercase tracking-wide">
            <span className="text-lg animate-pulse" aria-hidden>
              🚨
            </span>
            Urgence
          </p>
          <p className="hidden md:block text-white/95 text-xs font-bold uppercase tracking-widest">
            Curage préventif · Quartier
          </p>
          <div className="flex items-center gap-2">
            <span className="rounded-full border-2 border-white/80 bg-red-900/40 px-2.5 py-0.5 text-[10px] sm:text-xs font-black text-white uppercase">
              24h/24 · 7j/7
            </span>
            <a
              href={telHref}
              className="hidden sm:inline-flex font-black text-white text-sm hover:text-yellow-200"
            >
              📞 {TEL_DISPLAY}
            </a>
          </div>
        </div>
        <div
          className="h-2 w-full bg-yellow-400"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 0, 96% 100%, 4% 100%, 0 0)",
          }}
        />
      </div>

      <div className="bg-yellow-400 text-black text-center py-1.5 px-2 text-[11px] sm:text-xs font-black uppercase tracking-[0.15em] shadow-inner">
        Voisins ensemble — curage groupé — prix de groupe
      </div>

      <div className="bg-black border-b-[5px] border-orange-500">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-3">
          <BrandLogo src={logoSrc} alt={logoAlt} className="h-8 sm:h-9" />
          <Link
            href="/"
            className="text-xs sm:text-sm font-bold text-white/90 hover:text-yellow-300 uppercase tracking-wide"
          >
            ← Retour au site
          </Link>
          <a
            href={telHref}
            className="text-xs sm:text-sm font-black uppercase bg-gradient-to-r from-orange-500 to-red-600 text-white px-3 sm:px-4 py-2 rounded-lg shadow-lg whitespace-nowrap"
          >
            📞 Appeler
          </a>
        </div>
      </div>
    </header>
  );
}
