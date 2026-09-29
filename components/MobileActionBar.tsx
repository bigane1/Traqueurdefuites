"use client";

import { TEL_DISPLAY, telHref, whatsappHref } from "@/lib/contact";

export default function MobileActionBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden grid grid-cols-2 border-t border-slate-200 bg-white shadow-[0_-4px_24px_rgba(0,0,0,0.08)]">
      <a
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-emerald-700 bg-emerald-50"
      >
        WhatsApp
      </a>
      <a
        href={telHref}
        className="flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-ink bg-gold-bright"
      >
        {TEL_DISPLAY}
      </a>
    </div>
  );
}
