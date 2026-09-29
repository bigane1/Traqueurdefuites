import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { ADDRESS, EMAIL, SITE_NAME, TEL_DISPLAY } from "@/lib/contact";

export const metadata = { title: "Mentions légales" };

export default function MentionsPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-24 max-w-3xl mx-auto px-4 py-16 prose prose-slate">
        <h1>Mentions légales</h1>
        <p>
          <strong>{SITE_NAME}</strong>
          <br />
          {ADDRESS}
          <br />
          Tél. {TEL_DISPLAY} — {EMAIL}
        </p>
        <p>
          Éditeur du site : à compléter avec la raison sociale, le SIRET et le directeur de
          publication lors de la mise en production définitive.
        </p>
        <p>Hébergement : à compléter selon le serveur de déploiement.</p>
      </main>
      <SiteFooter />
    </>
  );
}
