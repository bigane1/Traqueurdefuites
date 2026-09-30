import { getSiteContent } from "@/lib/site-content";
import MutualisationFlyerHeaderClient from "@/components/mutualisation/MutualisationFlyerHeaderClient";

export default async function MutualisationFlyerHeader() {
  const { logoSrc, logoAlt } = await getSiteContent();
  return <MutualisationFlyerHeaderClient logoSrc={logoSrc} logoAlt={logoAlt} />;
}
