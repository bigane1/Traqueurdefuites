import Link from "next/link";
import type { ClientFocusBlock } from "@/lib/site-content";

export default function ClientFocusBlocks({ blocks }: { blocks: ClientFocusBlock[] }) {
  if (!blocks.length) return null;

  return (
    <section className="py-20 lg:py-28 px-4 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-600 mb-3">
            Prestations phares
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Deux interventions que nos clients demandent le plus
          </h2>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {blocks.map((block, index) => {
            const imageLeft = block.imageLeft ?? index % 2 === 0;
            return (
              <article
                key={block.title}
                className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center"
              >
                <div
                  className={`relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl ring-1 ring-slate-200 ${
                    imageLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={block.image}
                    alt={block.imageAlt}
                    className={`w-full h-full ${
                      block.imageFit === "contain"
                        ? "object-contain object-center bg-slate-100 p-2"
                        : "object-cover"
                    }`}
                    loading="lazy"
                  />
                  {block.imageFit !== "contain" ? (
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none" />
                  ) : null}
                  {block.image.includes("fumigene-fumee-regard") ? (
                    <p className="absolute bottom-2 left-2 right-2 text-[10px] text-white/80 leading-tight">
                      Illustration : test fumigène sur regard (Commons, CC BY-SA 4.0)
                    </p>
                  ) : null}
                </div>
                <div className={imageLeft ? "lg:order-2" : "lg:order-1"}>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-cyan-800 bg-cyan-50 border border-cyan-100 px-3 py-1 rounded-full mb-4">
                    {block.badge}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 leading-snug">
                    {block.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-base mb-6">{block.body}</p>
                  <Link
                    href={block.href}
                    className="inline-flex font-bold text-white bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 transition-shadow"
                  >
                    {block.ctaLabel} →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
