import InterventionForm from "@/components/InterventionForm";
import { ADDRESS, EMAIL, TEL_DISPLAY, telHref } from "@/lib/contact";

export default function ContactBlock() {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-0 border border-stone-200 overflow-hidden">
        <div className="p-8 sm:p-12 bg-stone-900 text-stone-300">
          <h2 className="text-3xl font-bold text-white mb-6">Contact & urgence</h2>
          <p className="text-sm leading-relaxed mb-8">
            Une fuite active ou un WC bouché : appelez en priorité. Pour planifier un diagnostic
            (caméra, recherche de fuite), laissez un message.
          </p>
          <a href={telHref} className="block text-3xl font-bold text-accent-soft mb-6 hover:text-white transition">
            {TEL_DISPLAY}
          </a>
          <p className="text-sm">{ADDRESS}</p>
          <a href={`mailto:${EMAIL}`} className="text-sm text-water-soft hover:underline mt-2 inline-block">
            {EMAIL}
          </a>
        </div>
        <div className="p-8 sm:p-12 bg-stone-bg">
          <InterventionForm />
        </div>
      </div>
    </section>
  );
}
