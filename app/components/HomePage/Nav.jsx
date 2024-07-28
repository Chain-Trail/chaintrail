"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Profile from "../user/Profile";
import { cinzel } from "../Reusable/Font";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const hiddenPaths = [
    "/daily-reward",
    "/referrals",
    "/collection",
    "/referrals",
    "/more",
  ];
  const showNavbar = pathname
    ? !hiddenPaths.some((path) => pathname.startsWith(path))
    : true;

  if (!showNavbar) return null; // Hide Navbar if the path starts with '/play/'

  return (
    <nav
      className={`fixed top-0 left-0 text-xs right-0 z-50 transition-all duration-300 ${
        cinzel.className
      } ${isSticky ? "bg-neutral-950 shadow-md" : "bg-transparent"}`}>
      <div className="mx-auto px-4 py-2 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center space-x-2 animate-bounce-in-down">
          <Image
            src="https://chain-trail.github.io/Quests/Images/Logo.svg"
            alt="Logo"
            width={30}
            height={30}
          />
          <span className="text-xl font-bold">CHAIN TRAIL</span>
        </Link>
        <div className="animate-bounce-in-down focus:outline-none">
          <Profile />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
