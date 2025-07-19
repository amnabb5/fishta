import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Fishta">
      <Image src="/images/logo-01.png" width={40} height={40} alt="Fishta Logo" />
    </Link>
  );
}
