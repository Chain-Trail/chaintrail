"use client";
import Image from "next/image";
import Link from "next/link";

const NFTCard = ({ title, nftImage, qrImage }) => (
  <div className="bg-neutral-950 rounded-lg text-sm">
    <div className="p-2">
      <h5 className="font-bold mb-4 text-center">{title}</h5>
      <div className="flex flex-col justify-between items-center mb-4">
        <Image src={nftImage} alt={title} width={100} height={100} />
        <Image src={qrImage} alt="QR Code" width={100} height={100} />
      </div>
    </div>
  </div>
);

const NFTSection = () => {
  const nftData = [
    {
      title: "ALPHA MIND",
      nftImage: "/mainNft1.svg",
      qrImage: "/scanNft.svg",
    },
    {
      title: "MYSTERY MINT",
      nftImage: "/mainNft2.svg",
      qrImage: "/scanNft.svg",
    },
    {
      title: "GOD'S EYE",
      nftImage: "/mainNft3.svg",
      qrImage: "/scanNft.svg",
    },
  ];

  return (
    <div className=" bg-[#151515] py-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4 animate__animated">
          UNIQUE NFTS
        </h2>
        <p className="text-xl text-gray-300">
          Earn Unique NFTS on completing each game & quest
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-1 px-4">
        {nftData.map((nft, index) => (
          <NFTCard key={index} {...nft} />
        ))}
      </div>

      <div className="text-center mt-10">
        <Link href="#" className="inline-block">
          <button className="hover:scale-105 transition-transform duration-300 ease-in-out bg-yellow-600 rounded-lg py-2 px-8">
            Play Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NFTSection;
