import Link from "next/link";
import type { MutualisationContent } from "@/lib/site-content";
import { telHref, TEL_DISPLAY, EMAIL } from "@/lib/contact";

export default function MutualisationSection({ data }: { data: MutualisationContent }) {
  return (
    <>
      <section className="relative overflow-hidden bg-[#1c1c1c] text-white py-12 md:py-20">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,#166534_0%,transparent_45%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-8 text-4xl" aria-hidden>
            🏘️
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black uppercase leading-tight mb-2">
                <span className="text-white">{data.heroTitle}</span>
              </h1>
              <p className="text-2xl sm:text-3xl font-black uppercase text-lime-400 mb-6">
                {data.heroHighlight}
              </p>
              <p className="text-lg text-white/90 leading-relaxed mb-8 font-medium">{data.intro}</p>
              <ul className="space-y-3 mb-8">
                {data.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-white font-semibold">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-lime-500 text-black text-sm font-black">
                      ✓
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <p className="text-white/70 mb-6 text-sm">{data.ctaText}</p>
              <Link
                href="/demande-intervention"
                className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-400 text-black font-black uppercase text-sm px-6 py-3 rounded-lg shadow-lg"
              >
                Devis groupé →
              </Link>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div
                className="relative max-w-md w-full bg-lime-400 text-black font-black text-lg sm:text-xl text-center px-6 py-8 sm:py-10 shadow-2xl -rotate-2"
                style={{
                  clipPath:
                    "polygon(2% 0%, 98% 2%, 100% 96%, 96% 100%, 4% 98%, 0% 4%)",
                }}
              >
                {data.callout}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pied style flyer */}
      <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10">
          <a
            href={telHref}
            className="flex items-center gap-3 text-white font-black text-2xl sm:text-3xl hover:text-yellow-200"
          >
            <span className="text-3xl">📞</span>
            {TEL_DISPLAY.replace(/\s/g, "")}
          </a>
          <p className="text-white/90 text-sm font-bold text-center">
            traqueurdefuites.fr · Saint-Pierre-des-Corps
            <br />
            <a href={`mailto:${EMAIL}`} className="underline hover:text-yellow-200">
              {EMAIL}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
