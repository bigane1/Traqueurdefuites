import { getSiteContent } from "@/lib/site-content";
import SiteHeaderClient from "@/components/SiteHeaderClient";

export default async function SiteHeader() {
  const { logoSrc, logoAlt } = await getSiteContent();
  return <SiteHeaderClient logoSrc={logoSrc} logoAlt={logoAlt} />;
}
