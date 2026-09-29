import { ADDRESS, EMAIL, TEL_DISPLAY, telHref } from "@/lib/contact";

export default function TopBar() {
  return (
    <div className="hidden lg:block bg-ink text-slate-300 text-xs border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-3">
        <p className="truncate">{ADDRESS}</p>
        <div className="flex items-center gap-6">
          <a href={telHref} className="hover:text-aqua transition-colors font-semibold">
            {TEL_DISPLAY}
          </a>
          <a href={`mailto:${EMAIL}`} className="hover:text-aqua transition-colors">
            {EMAIL}
          </a>
        </div>
      </div>
    </div>
  );
}
