"use client";
import Image from "next/image";
import Button from "../Reusable/Button";

const Daily = () => {
  const gamesImg = ["/daily1.png", "/daily2.png", "/daily3.png"];

  return (
    <div className="bg-[#151515] py-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4 animate__animated">GAMES</h2>
        <p className="text-lg text-gray-300">Think. Tap. Win. Points </p>
      </div>

      <div className="flex flex-row flex-wrap justify-center w-full gap-4">
        {gamesImg.map((gamesImg, index) => (
          <Image
            key={index}
            src={gamesImg}
            alt="Games"
            width={1000}
            height={1000}
            className="hover:scale-105 opacity-80 w-fit max-w-[180px] min-h-[400px] md:max-w-[200px] md:min-h-[450px]"
          />
        ))}
      </div>

      <div className="text-center mt-10">
        <Button
          className="bg-yellow-700 hover:bg-yellow-600 text-black py-3"
          href="/play">
          Play Now
        </Button>
      </div>
    </div>
  );
};

export default Daily;
