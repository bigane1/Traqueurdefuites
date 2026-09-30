import Image from "next/image";
import Link from "next/link";
import { LOGO_ALT, LOGO_SRC } from "@/lib/brand";

type Props = {
  className?: string;
  asLink?: boolean;
  priority?: boolean;
  src?: string;
  alt?: string;
};

export default function BrandLogo({
  className = "",
  asLink = true,
  priority = false,
  src,
  alt,
}: Props) {
  const logo = (
    <Image
      src={src ?? LOGO_SRC}
      alt={alt ?? LOGO_ALT}
      width={678}
      height={260}
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
