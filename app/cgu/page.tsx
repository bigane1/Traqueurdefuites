import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import LegalDocument from "@/components/legal/LegalDocument";
import { getSiteContent } from "@/lib/site-content";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const content = await getSiteContent();
  return { title: content.legal.cgu.title };
}

export default async function CguPage() {
  const content = await getSiteContent();

  return (
    <>
      <SiteHeader />
      <main className="pt-16 max-w-3xl mx-auto px-4 py-16">
        <LegalDocument doc={content.legal.cgu} />
      </main>
      <SiteFooter />
    </>
  );
}
