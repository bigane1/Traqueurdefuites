import Link from "next/link";
import type { TarifItem } from "@/lib/site-content";
import { tarifImage } from "@/lib/service-images";
import { SITE_NAME } from "@/lib/contact";

type Props = {
  items: TarifItem[];
  showBrand?: boolean;
  compact?: boolean;
};

export default function TarifsGrid({ items, showBrand = true, compact = false }: Props) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => {
        const src = item.image || tarifImage(item.title);
        return (
          <article
            key={item.title}
            className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-cyan-200 transition-all"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt=""
              className={`w-full object-cover ${compact ? "h-32" : "h-40"}`}
              loading="lazy"
            />
            <div className="p-5">
              {showBrand && (
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                  {SITE_NAME}
                </p>
              )}
              <h3 className="text-lg font-bold text-slate-900 leading-snug">{item.title}</h3>
              <p className="text-emerald-700 font-extrabold text-base mt-2">{item.price}</p>
              <p className="text-sm text-slate-600 leading-relaxed mt-2">{item.desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
