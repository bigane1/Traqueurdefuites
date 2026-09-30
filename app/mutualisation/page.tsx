import SiteFooter from "@/components/SiteFooter";
import MutualisationSection from "@/components/mutualisation/MutualisationSection";
import MutualisationFlyerHeader from "@/components/mutualisation/MutualisationFlyerHeader";
import { getSiteContent } from "@/lib/site-content";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Curage groupé entre voisins",
  description:
    "Mutualisez un curage préventif de canalisations entre voisins — prix de groupe et économies.",
};

export default async function MutualisationPage() {
  const content = await getSiteContent();

  return (
    <>
      <MutualisationFlyerHeader />
      <main className="pt-mutualisation-header">
        <MutualisationSection data={content.mutualisation} />
      </main>
      <SiteFooter />
    </>
  );
}
