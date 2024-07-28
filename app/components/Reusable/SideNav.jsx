"use client";
import { useState } from "react";
import Link from "next/link";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "/", title: "Home" },
    { href: "/play", title: "Quests" },
    { href: "/play", title: "My Collections" },
    { href: "/play", title: "Referrals" },
    { href: "/play", title: "Daily Rewards" },
    { href: "/play", title: "Earn More Points" },
  ];

  return (
    <>
      <button onClick={toggleNav} className="text-2xl z-50 relative">
        {isOpen ? <RiCloseLine /> : <RiMenu3Fill title="menu" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleNav}></div>
      )}

      {/* Side Navigation */}
      <nav
        className={`fixed top-0 right-0 h-full w-52 bg-neutral-950 text-white p-4 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <ul className="mt-10">
          {navLinks.map((link, index) => (
            <li key={index} className="mb-4">
              <Link
                href={link.href}
                className="block py-2 px-4  hover:bg-neutral-700 rounded transition duration-200 "
                onClick={toggleNav}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default SideNav;
