import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="container-fluid m-0 relative">
      <div className="text-center p-4 md:p-10 relative z-10">
        <h2
          className="text-4xl md:text-5xl font-bold mb-4 opacity-0 transition-opacity duration-700 ease-in-out"
          id="banner-title">
          CHAIN TRAIL
          <br className="hidden md:inline" /> STUDIO
        </h2>
        <p
          className="text-lg md:text-xl mb-6 opacity-0 transition-opacity duration-700 ease-in-out delay-300"
          id="banner-text">
          Embark on Word Trails, to learn about
          <span className="block md:inline">blockchains</span>
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <Link
            href="/drwd.htm"
            className="opacity-0 transition-opacity duration-700 ease-in-out delay-500"
            id="play-button">
            <Image
              src="chaincoins.svg"
              alt="Play Now"
              width={200}
              height={50}
              className="hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </Link>
          <Link
            href="#"
            className="opacity-0 transition-opacity duration-700 ease-in-out delay-700"
            id="learn-button">
            <Image
              src="chaincoins.svg"
              alt="Learn More"
              width={200}
              height={50}
              className="hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
