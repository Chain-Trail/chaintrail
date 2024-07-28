"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaCaretRight } from "react-icons/fa";
import { FaCaretLeft } from "react-icons/fa";

const steps = [
  {
    step: "STEP 1",
    image: "coinsPana.svg",
    title: "Connect Wallet or Select Play on Telegram to get started",
  },
  {
    step: "STEP 2",
    image: "mainNft1.svg",
    title:
      "Choose a Quest from the list to begin the Trail Adventure and Start earning",
  },
  {
    step: "STEP 3",
    image: "coinsPana.svg",
    title:
      "Think, Tap, Win . Earn points and NFTs for getting the correct word that represents the 4 pictures in the Quest.",
  },
  {
    step: "STEP 4",
    image: "mainNft2.svg",
    title:
      "Earn exclusive NFTs for completing a quest correctly at a go without failing!!",
  },
  {
    step: "STEP 5",
    image: "coinsPana.svg",
    title: "Claim FREE Points and game Passes for Logging into the game daily.",
  },
  {
    step: "STEP 6",
    image: "mainNft3.svg",
    title: "Refer friends and earn more points.",
  },
];

const HowToPlay = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextStep();
    }, 2000);

    return () => clearInterval(timer);
  }, [currentStep]);
  const nextStep = () => {
    setTimeout(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 2000);
  };

  const prevStep = () => {
    setTimeout(() => {
      setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
    }, 2000);
  };

  return (
    <section className="bg-[#151515] py-12" id="how-to-play">
      <h2 className="text-4xl font-bold text-white text-center mb-8">
        HOW TO PLAY
      </h2>

      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-neutral-950 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 relative">
            <div
              className="transition-opacity duration-500">
              <h1 className="text-2xl font-bold text-center mb-4">
                {steps[currentStep].step}
              </h1>
              <div className="flex justify-center mb-4">
                <Image
                  src={steps[currentStep].image}
                  alt={steps[currentStep].step}
                  width={200}
                  height={200}
                  className="object-contain rounded-lg"
                />
              </div>
              <div className="text-center mb-4">
                <h1 className="text-xl font-semibold">
                  {steps[currentStep].title}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4 space-x-4">
          <button
            onClick={prevStep}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            <FaCaretLeft />
          </button>
          <button
            onClick={nextStep}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            <FaCaretRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowToPlay;
