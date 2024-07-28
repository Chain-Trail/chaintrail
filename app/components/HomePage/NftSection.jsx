"use client";
import Image from "next/image";
import Button from "../Reusable/Button";

const NFTSection = () => {
  const nftImages = ["/nft1.png", "/nft2.png", "/nft3.png"];

  return (
    <div className="bg-[#151515] py-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4 animate__animated">
          UNIQUE NFTS
        </h2>
        <p className="text-lg text-gray-300">
          Earn Unique NFTS on completing each game & quest
        </p>
      </div>

      <div className="flex flex-row flex-wrap justify-center w-full">
        {nftImages.map((nftImage, index) => (
          <Image
            key={index}
            src={nftImage}
            alt={`NFT ${index + 1}`}
            width={400}
            height={600}
            className="hover:scale-105 w-fit max-w-[180px] min-h-[400px] md:max-w-[200px] md:min-h-[450px]"
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

export default NFTSection;
