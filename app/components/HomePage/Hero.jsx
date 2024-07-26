"use client";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen bg-black flex flex-col items-center justify-center">
      <img
        src="bg.png"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
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

        <p className="text-white mb-6">
          Embark on Word Trails, to learn about blockchains
        </p>

        <button className="bg-yellow-600  font-bold py-2 px-8 rounded-lg mb-2 hover:bg-yellow-600 transition duration-300">
          PLAY NOW
        </button>
      </div>
    </div>
  );
};

export default Hero;
