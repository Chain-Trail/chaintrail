"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Profile from "../user/Profile";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky ? "bg-neutral-950 shadow-md" : "bg-transparent"
      }`}>
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
