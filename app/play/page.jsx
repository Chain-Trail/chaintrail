"use client";
import { useState } from "react";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";
import { LuShare2 } from "react-icons/lu";
import { GrFormNextLink } from "react-icons/gr";

const images = [
  "quest/bitcoin.jpg",
  "quest/bitcoin2.jpg",
  "quest/bitcoin3.jpg",
  "quest/bitcoin4.jpg",
];

const possibleAnswers = ["C", "B", "T", "D", "O", "I", "F", "N"];

const Play = () => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const handleAnswerClick = (answer) => {
    setSelectedAnswers([...selectedAnswers, answer]);
  };
  const deleteLast = () => {
    setSelectedAnswers(selectedAnswers.slice(0, -1));
  };

  return (
    <section>
      <div className=" py-1 flex justify-between font-bold items-center">
        <div className="flex items-center gap-2">
          <img src="chaincoins.svg" alt="Chain Coins" />
          <span>1005</span>
        </div>
        <div className="flex">
          <img src="redImg.png" alt="level" className="w-[60px]" />
          <span className="relative text-sm top-[17px] right-[43px]">8/10</span>
        </div>
        <div className="text-2xl flex gap-2 font-extrabold ">
          <Link href="/">
            <RiMenu3Fill title="home" />
          </Link>
        </div>
      </div>
      {/* question starts */}
      <div className="flex flex-wrap items-center gap-2 justify-center">
        {images.map((image, index) => (
          <img
            key={index}
            loading="lazy"
            src={image}
            className="rounded-lg"
            alt={`bitcoin ${index + 1}`}
            style={{ width: "140px" }}
          />
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-2 justify-center my-8">
        {possibleAnswers.map((answer, index) => (
          <div
            key={index}
            className="bg-black hover:bg-yellow-900 text-white p-2 rounded-md cursor-pointer"
            onClick={() => handleAnswerClick(answer)}>
            {answer}
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center gap-1 items-center ">
        <div className=" min-w-[240px] flex items-center justify-between bg-black text-yellow-500 min-h-[30px] p-2">
          Ans: <span>{selectedAnswers.join("")}</span>
        </div>
        <div className="flex items-center justify-center my-2 text-sm gap-2">
          <button
            className="bg-white text-black p-2 rounded-lg"
            onClick={deleteLast}>
            Del
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center py-2 my-8 text-sm gap-2">
        <button className="bg-white text-black p-2 rounded-lg">
          GET HINT WITH
          <img src="chaincoins.svg" width={30} className="inline" alt="hint" />
          20
        </button>
        <span className="bg-black text-white flex flex-col p-2 rounded-lg cursor-pointer items-center justify-between">
          <LuShare2 />
          Share
        </span>
        <span className="bg-black flex flex-col p-2 rounded-lg items-center justify-between cursor-pointer">
          <GrFormNextLink />
          Next
        </span>
      </div>
    </section>
  );
};

export default Play;
