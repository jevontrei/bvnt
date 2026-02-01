import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-6xl m-8">BVNT</h2>
      <h3 className="text-2xl p-4">Bio</h3>
      <p className="px-24">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <footer className="mt-24 flex">
        <Link
          href="https://www.facebook.com/BenvonTreibvnt/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:grayscale-50"
        >
          <Image
            src="/facebook-svgrepo-com.svg"
            alt="Facebook logo"
            width={24}
            height={24}
          />
        </Link>

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

        <Link
          href="https://open.spotify.com/artist/7HS2BPqf7piAUPoiSKaiiH"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:grayscale-50"
        >
          <Image
            src="/spotify-alt-1-svgrepo-com.svg"
            alt="Spotify logo"
            width={24}
            height={24}
          />
        </Link>

        <Link
          href="https://www.youtube.com/@Benvontrei"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:grayscale-50"
        >
          <Image
            src="/youtube-play-svgrepo-com.svg"
            alt="Youtube logo"
            width={24}
            height={24}
          />
        </Link>
      </footer>
    </div>
  );
}
