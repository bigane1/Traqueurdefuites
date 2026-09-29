"use client";

import Link from "next/link";
import { TEL_DISPLAY, telHref, whatsappHref } from "@/lib/contact";

/** Barre fixe bas d’écran — différente des pastilles flottantes type Qadus */
export default function StickyContactBar() {
  return (
    <>
      <div className="fixed bottom-0 inset-x-0 z-40 md:hidden grid grid-cols-3 border-t border-stone-300 bg-white text-sm font-semibold">
        <a href={telHref} className="py-3.5 text-center bg-stone-900 text-white">
          Appeler
        </a>
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="py-3.5 text-center text-water border-x border-stone-200"
        >
          WhatsApp
        </a>
        <Link href="/demande-intervention" className="py-3.5 text-center text-accent">
          Devis
        </Link>
      </div>
      <div className="hidden md:block fixed bottom-6 left-6 z-40">
        <a
          href={telHref}
          className="shadow-lg shadow-stone-900/15 bg-white border border-stone-200 px-5 py-3 text-sm font-bold text-stone-900 hover:border-accent transition"
        >
          Urgence · {TEL_DISPLAY}
        </a>
      </div>
      <div className="h-14 md:h-0" aria-hidden />
    </>
  );
}
