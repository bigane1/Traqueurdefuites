import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingCTA from "@/components/FloatingCTA";
import HeroUltra from "@/components/ultra/HeroUltra";
import MarqueeUltra from "@/components/ultra/MarqueeUltra";
import UrgenceUltra from "@/components/ultra/UrgenceUltra";
import ServicesUltra from "@/components/ultra/ServicesUltra";
import ProcessUltra from "@/components/ultra/ProcessUltra";
import TarifsUltra from "@/components/ultra/TarifsUltra";
import ValuesUltra from "@/components/ultra/ValuesUltra";
import ReviewsUltra from "@/components/ultra/ReviewsUltra";
import ZoneUltra from "@/components/ultra/ZoneUltra";
import FaqUltra from "@/components/ultra/FaqUltra";
import ContactUltra from "@/components/ultra/ContactUltra";
import { getSiteContent } from "@/lib/site-content";
import { faqSchema } from "@/lib/schema";

export const dynamic = "force-dynamic";

export default function HomePage() {
  const content = getSiteContent();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(content.faq)) }}
      />
      <SiteHeader />
      <main>
        <HeroUltra content={content} />
        <MarqueeUltra />
        <UrgenceUltra />
        <ServicesUltra items={content.expertises} />
        <ProcessUltra />
        <TarifsUltra />
        <ValuesUltra />
        <ReviewsUltra items={content.testimonials} />
        <ZoneUltra groups={content.zoneGroups} />
        <FaqUltra items={content.faq} />
        <ContactUltra />
      </main>
      <SiteFooter />
      <FloatingCTA />
    </>
  );
}
