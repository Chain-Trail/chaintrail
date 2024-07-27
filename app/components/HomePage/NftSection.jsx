"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "../Reusable/Button";

const NFTCard = ({ title, nftImage, qrImage }) => (
  <div className="bg-neutral-950 rounded overflow-hidden text-xs">
    <h5 className=" py-2 text-center">{title}</h5>
    <div className="flex flex-col justify-between items-center">
      <Image
        src={nftImage}
        alt={title}
        width={100}
        height={100}
        className="w-full hover:brightness-75"
      />
      <Image
        src={qrImage}
        alt="QR Code"
        width={100}
        height={100}
        className="w-full hover:brightness-75"
      />
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
    {
      title: "MYSTERY MINT",
      nftImage: "/mainNft2.svg",
      qrImage: "/scanNft.svg",
    },
  ];

  return (
    <div className=" bg-[#151515] py-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4 animate__animated">
          UNIQUE NFTS
        </h2>
        <p className="text-lg mx-12 text-gray-300">
          Earn Unique NFTS on completing each game & quest
        </p>
      </div>

      <div className="grid mx-auto grid-cols-2 w-fit place-content-center place-items-center gap-2 px-4">
        {nftData.map((nft, index) => (
          <NFTCard key={index} {...nft} />
        ))}
      </div>

      <div className="text-center mt-10">
        <Button className="bg-yellow-700 hover:bg-yellow-600" href="/play">Play Now</Button>
      </div>
    </div>
  );
};

export default NFTSection;
