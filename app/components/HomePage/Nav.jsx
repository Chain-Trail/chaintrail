"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Popup from "./Popup";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
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
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center space-x-2 animate-bounce-in-down">
          <Image
            src="/logo2.png"
            alt="Logo"
            width={40}
            height={40}
            className="cn-logo"
          />
          <span className="text-xl font-bold">CHAIN TRAIL</span>
        </Link>
        <button
          onClick={openPopup}
          className="animate-bounce-in-down focus:outline-none">
          <Image
            src="/btn/button2.png"
            alt="Button"
            width={140}
            height={32}
            className="clicky"
          />
        </button>
      </div>
      <Popup isOpen={isPopupOpen} onClose={closePopup} />
    </nav>
  );
};

export default Navbar;
