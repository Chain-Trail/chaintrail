"use client";
import Image from "next/image";
import Button from "./Button";
import { useState, useEffect } from "react";


export const Success = () => {
     const [isVisible, setIsVisible] = useState(true);
     const [isAnimating, setIsAnimating] = useState(false);

     useEffect(() => {
       // Start the animation after a short delay
       const animationTimer = setTimeout(() => setIsAnimating(true), 100);

       // Hide the component after the animation
       const visibilityTimer = setTimeout(() => setIsVisible(false), 1500);

       return () => {
         clearTimeout(animationTimer);
         clearTimeout(visibilityTimer);
       };
     }, []);

     if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black  font-bold text-lg">
      <div className="relative w-screen h-screen ">
        <Image
          src="/btn/success.png"
          alt="success background"
          width={1000}
          height={1000}
          className="absolute inset-0 w-full h-full "
        />
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Image
              src="/coins.png"
              alt="coins"
              width={1000}
              height={1000}
              className="w-[70%] mx-auto"
            />
            <h1 className="text-3xl font-extrabold mb-4 mx-auto text-green-500">
              Correct!
            </h1>
            <div className="text-xl  max-w-[300px]">
              You picked the right answer and you earned +1000 coins
            </div>
            <div
              className={`fixed left-1/2 transform -translate-x-1/2 flex items-center justify-center
                     transition-all duration-1000 ease-in-out
                     ${
                       isAnimating ? "top-0 opacity-0" : "top-1/2 opacity-100"
                     }`}>
              <Image
                src="/coins.png"
                alt="coins"
                width={20}
                height={20}
                className="w-[20px]"
              />
              <div className="text-yellow-500 ml-2">+1000</div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Wrong = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white font-bold text-lg">
      <div className="relative w-screen h-screen ">
        <Image
          src="/btn/success.png"
          alt="success background"
          width={1000}
          height={1000}
          className="absolute inset-0 w-full h-full "
        />
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Image
              src="/coins.png"
              alt="coins"
              width={1000}
              height={1000}
              className="w-[70%] mx-auto"
            />
            <h1 className="text-3xl font-extrabold mb-4 mx-auto">Oops!</h1>

            <div className="text-xl  max-w-[300px]">
              You picked the wrong answer and earned +0 points
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Complete = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white font-bold text-lg">
      <div className="relative w-screen h-screen ">
        <Image
          src="/btn/success.png"
          alt="success background"
          width={1000}
          height={1000}
          className="absolute inset-0 w-full h-full "
        />
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Image
              src="/coins.png"
              alt="coins"
              width={1000}
              height={1000}
              className="w-[70%] mx-auto"
            />
            <h1 className="text-3xl font-extrabold mb-4 mx-auto">
              Congratulations!
            </h1>

            <div className="text-xl  max-w-[300px]">
              You have completed this quest. We hope you enjoy playing our game
            </div>
            <div className="flex text-xs gap-2 my-6">
              <Button
                href="/"
                className="bg-neutral-950 text-yellow-500 hover:bg-slate-950 z-10  border border-yellow-700">
                Home
              </Button>
              <Button
                href="/play/quest2"
                className="bg-yellow-600 hover:bg-yellow-700">
                Next Quest
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
