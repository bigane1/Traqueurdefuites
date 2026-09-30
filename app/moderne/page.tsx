import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingCTA from "@/components/FloatingCTA";
import HeroModern from "@/components/home/HeroModern";
import UrgenceModern from "@/components/home/UrgenceModern";
import ServicesGrid from "@/components/home/ServicesGrid";
import ClientFocusBlocks from "@/components/ClientFocusBlocks";
import ProcessModern from "@/components/home/ProcessModern";
import TarifsTeaser from "@/components/home/TarifsTeaser";
import ReviewsModern from "@/components/home/ReviewsModern";
import ZoneModern from "@/components/home/ZoneModern";
import FaqModern from "@/components/home/FaqModern";
import ContactModern from "@/components/home/ContactModern";
import { getSiteContent } from "@/lib/site-content";
import { faqSchema } from "@/lib/schema";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Accueil classique",
  description: "Version d'accueil style Qadus — Traqueur de Fuites",
};

export default async function ModerneHomePage() {
  const content = await getSiteContent();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(content.faq)) }}
      />
      <SiteHeader />
      <main>
        <HeroModern content={content} />
        <UrgenceModern />
        <ServicesGrid items={content.expertises} />
        <ClientFocusBlocks blocks={content.clientFocusBlocks} />
        <ProcessModern />
        <TarifsTeaser />
        <ReviewsModern items={content.testimonials} />
        <ZoneModern groups={content.zoneGroups} />
        <FaqModern items={content.faq} />
        <ContactModern />
      </main>
      <SiteFooter />
      <FloatingCTA />
    </>
  );
}
