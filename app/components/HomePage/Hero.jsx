"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaTelegram } from "react-icons/fa";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen bg-black flex flex-col items-center justify-center">
      <Image
        width={1000}
        height={1000}
        src="/bg.png"
        alt="background"
        className="absolute opacity-40 inset-0 w-full h-full object-cover"
      />

      <div className="z-10 text-center">
        <h1
          className={`text-5xl font-serif text-white mb-4 transition-all duration-100 ease-out ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}>
          CHAIN TRAIL
          <br />
          STUDIO
        </h1>

        <p className="text-white mb-6 mx-12">
          Embark on Word Trails, to learn about blockchains
        </p>

        <Link
          href="https://t.me/TWAczbot"
          className="bg-yellow-600 text-neutral-900  font-extrabold py-2 px-8 rounded-lg mb-2 hover:bg-yellow-700 transition duration-300 flex gap-2 items-center justify-center w-fit mx-auto">
          <span>PLAY NOW</span>
          <span className="animate-pulse text-xl">
            <FaTelegram />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
