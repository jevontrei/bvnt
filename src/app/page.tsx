import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <h2 className="text-6xl">BVNT</h2>
      <Link
        href="https://www.instagram.com/benvontrei/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:grayscale-50"
      >
        <Image
          src="/instagram-logo-facebook-2-svgrepo-com.svg"
          alt="Instagram logo"
          width={24}
          height={24}
        />
      </Link>
    </>
  );
}
