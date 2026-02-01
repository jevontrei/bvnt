import Link from "next/link";
import { Button } from "./button";
import {
  Camera,
  Clapperboard,
  House,
  Mail,
  Music,
  ScrollText,
} from "lucide-react";

// default export
export default function NavBar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <House />,
    },
    {
      name: "About",
      link: "/",
      icon: <ScrollText />,
    },
    {
      name: "Music",
      link: "/music",
      icon: <Music />,
    },
    {
      name: "Videos",
      link: "/videos",
      icon: <Clapperboard />,
    },
    {
      name: "Photos",
      link: "/photos",
      icon: <Camera />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <Mail />,
    },
  ];

  return (
    <div className="my-6 mx-4 flex justify-center-safe flex-wrap">
      {navItems.map((navItem, i) => {
        return (
          <Button key={i} className="m-1">
            {navItem.icon}
            <Link href={navItem.link}>{navItem.name}</Link>
          </Button>
        );
      })}
    </div>
  );
}
