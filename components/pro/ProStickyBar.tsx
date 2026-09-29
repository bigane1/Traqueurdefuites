"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { TEL_DISPLAY, telHref } from "@/lib/contact";

export default function ProStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-50 p-3 md:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex gap-2 max-w-lg mx-auto">
        <a
          href={telHref}
          className="flex-1 text-center bg-[var(--pro-ink)] text-white font-bold py-3.5 rounded-2xl text-sm shadow-xl"
        >
          📞 {TEL_DISPLAY}
        </a>
        <Link
          href="/demande-intervention"
          className="flex-1 text-center bg-[var(--pro-accent)] text-white font-bold py-3.5 rounded-2xl text-sm"
        >
          Devis
        </Link>
      </div>
    </div>
  );
}
