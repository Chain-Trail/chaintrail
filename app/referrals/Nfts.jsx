import { GiOpenTreasureChest } from "react-icons/gi";
const images = [
  {
    img1: "mainNft1.svg",
    scan: "scanNft.svg",
  },
  {
    img2: "mainNft2.svg",
    scan: "scanNft.svg",
  },
  {
    img3: "mainNft3.svg",
    scan: "scanNft.svg",
  },
  {
    img3: "lockedNft1.svg",
    // scan: "scanNft.svg",
  },
];

const Nfts = () => {
  return (
    <div className="my-16 mx-4">
      <div className="flex justify-between items-center">
        <h1 className="my-4">YOUR CHEST</h1>
        <GiOpenTreasureChest className="text-2xl text-yellow-500 mr-10" />
      </div>

      <div className=" flex flex-row flex-wrap gap-4 items-center">
        {images.map((item, index) => (
          <div key={index} className="bg-neutral-700 w-[160px] rounded-xl">
            <h1 className="bg-yellow-500 py-2 text-black text-center font-bold w-full ">
              NFT
            </h1>
            <div className="p-2">
              <p className="font-bold text-sm my-1">ALPHA MIND</p>
              {Object.keys(item).map((key, idx) => (
                <img loading="lazy" key={idx} src={item[key]} alt={key} />
              ))}

              <p className="float-right text-sm">scan me</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Nfts;
