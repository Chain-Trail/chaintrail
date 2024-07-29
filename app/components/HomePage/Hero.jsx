"use client";
import Image from "next/image";
import { useTelegramAuth } from "@/app/TelegramAuthProvider";
import { useEffect, useState } from "react";
import { FaTelegram } from "react-icons/fa";
import Button from "../Reusable/Button";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  const { userInfo, isLoading } = useTelegramAuth();
  if (isLoading) {
    return (
      <Button
        href="/play"
        className="flex mx-auto text-yellow-500 text-sm md:text-lg gap-2">
        play now
        <span className="animate-pulse text-xl">
          <FaTelegram />
        </span>
      </Button>
    );
  }

  return (
    <div className="relative w-screen h-screen bg-black flex flex-col items-center justify-center">
      <Image
        width={1000}
        height={1000}
        src="/bg.png"
        alt="background"
        className="absolute opacity-40 inset-0 w-full h-full object-cover"
      />

      <div className="z-10 text-center">
        <h1
          className={`text-5xl md:text-7xl font-serif text-white mb-4 transition-all duration-100 ease-out ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}>
          CHAIN TRAIL <div className="mt-4">STUDIO</div>
        </h1>

        <p className="text-white mb-12 mx-12 text-lg md:text-xl ">
          Embark on Word Trails, learn about blockchain
        </p>
        <Button
          href="/play"
          className="flex px-8 mb-4 mx-auto text-sm gap-2 text-black bg-yellow-500 py-3">
          play now
        </Button>

        {userInfo ? (
          <Button
            href="/play"
            className="flex mx-auto text-sm gap-2 md:text-2xl">
            play now
            <span className="animate-pulse text-xl">
              <FaTelegram />
            </span>
          </Button>
        ) : (
          <Button
            href="https://t.me/ChainTrailBot" // Replace with your actual login page URL
            className="flex mx-auto text-sm gap-2 bg-black hover:bg-neutral-950 outline">
            Play on
            <span className="animate-pulse text-xl">
              <FaTelegram />
            </span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Hero;
