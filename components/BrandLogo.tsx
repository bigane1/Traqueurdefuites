import Image from "next/image";
import Link from "next/link";
import { LOGO_ALT, LOGO_SRC } from "@/lib/brand";

type Props = {
  className?: string;
  asLink?: boolean;
  priority?: boolean;
};

export default function BrandLogo({
  className = "",
  asLink = true,
  priority = false,
}: Props) {
  const logo = (
    <Image
      src={LOGO_SRC}
      alt={LOGO_ALT}
      width={999}
      height={270}
      priority={priority}
      unoptimized
      className={`h-9 w-auto sm:h-10 object-contain object-left ${className}`}
      draggable={false}
    />
  );

  if (!asLink) return logo;

  return (
    <Link href="/" className="shrink-0 inline-flex">
      {logo}
    </Link>
  );
}
