import SideNav from "../components/Reusable/SideNav";

import Button from "../components/Reusable/Button";
import Link from "next/link";

export const metadata = {
  title: "Quests",
  description: "earn NFTs while playing your favorite game",
};

const Play = () => {
  const quests = [
    {
      id: 1,
      name: "Alpha Mind",
      status: "play",
      href: "/play/quest-1",
      img: "/mainNft1.svg",
      desc: "Players are presented with four images and must guess the word that connects them. The game incorporates elements of blockchain, with players earning tokens as they solve puzzles.",
    },
    {
      id: 2,
      name: "Chain Quest",
      status: "play",
      href: "/Admin/new-question",
      img: "/mainNft2.svg",
      desc: "Payers are presented with four images and must guess the word that connects them. The game incorporates elements of blockchain, with players earning tokens as they solve puzzles.",
    },
    {
      id: 3,
      name: "God's Eye",
      status: "play",
      href: "#",
      img: "/quest/bitcoin2.jpg",
      desc: "Players are presented with four images and must guess the word that connects them. The game incorporates elements of blockchain, with players earning tokens as they solve puzzles.",
    },
    {
      id: 4,
      name: "IQ Trail",
      status: "locked",
      href: "#",
      img: "/mainNft2.svg",
      desc: "Players are presented with four images and must guess the word that connects them. The game incorporates elements of blockchain, with players earning tokens as they solve puzzles.",
    },
    {
      id: 5,
      name: "Block Map",
      status: "locked",
      href: "#",
      img: "/quest/bitcoin3.jpg",
      desc: "Players are presented with four images and must guess the word that connects them. The game incorporates elements of blockchain, with players earning tokens as they solve puzzles.",
    },
    {
      id: 6,
      name: "Quest 6",
      status: "locked",
      href: "#",
      img: "/mainNft3.svg",
      desc: "Players are presented with four images and must guess the word that connects them. The game incorporates elements of blockchain, with players earning tokens as they solve puzzles.",
    },
    {
      id: 7,
      name: "Quest 7",
      status: "locked",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "Players are presented with four images and must guess the word that connects them. The game incorporates elements of blockchain, with players earning tokens as they solve puzzles.",
    },
    {
      id: 8,
      name: "Quest 8",
      status: "locked",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "Players are presented with four images and must guess the word that connects them. The game incorporates elements of blockchain, with players earning tokens as they solve puzzles.",
    },
    {
      id: 9,
      name: "Quest 9",
      status: "locked",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "Players are presented with four images and must guess the word that connects them. The game incorporates elements of blockchain, with players earning tokens as they solve puzzles.",
    },
    {
      id: 10,
      name: "Quest 10",
      status: "locked",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "Players are presented with four images and must guess the word that connects them. The game incorporates elements of blockchain, with players earning tokens as they solve puzzles.",
    },
    {
      id: 11,
      name: "Quest 11",
      status: "locked",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "Players are presented with four images and must guess the word that connects them. The game incorporates elements of blockchain, with players earning tokens as they solve puzzles.",
    },
    {
      id: 12,
      name: "Quest 12",
      status: "locked",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "Players are presented with four images and must guess the word that connects them. The game incorporates elements of blockchain, with players earning tokens as they solve puzzles.",
    },
    {
      id: 13,
      name: "Quest 13",
      status: "locked",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "Players are presented with four images and must guess the word that connects them. The game incorporates elements of blockchain, with players earning tokens as they solve puzzles.",
    },
    {
      id: 14,
      name: "Quest 14",
      status: "locked",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "Players are presented with four images and must guess the word that connects them. The game incorporates elements of blockchain, with players earning tokens as they solve puzzles.",
    },
    {
      id: 15,
      name: "Quest 15",
      status: "locked",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "Players are presented with four images and must guess the word that connects them. The game incorporates elements of blockchain, with players earning tokens as they solve puzzles.",
    },
  ];

  return (
    <section>
      <h1 className="flex justify-between items-center mx-4 my-2 py-2">
        <div className="font-bold text-2xl">QUESTS</div>
        <div className="flex gap-2 cursor-pointer">
          <SideNav />
        </div>
      </h1>
      <div className=" w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {quests.map((quest) => (
          <Link
            key={quest.id}
            href={quest.href}
            className="border border-neutral-400 w-72 rounded-xl pb-3 bg-[#363636] hover:bg-neutral-900 mb-2 flex flex-col justify-between items-center">
            <img
              className=" rounded-xl h-32 object-cover w-full "
              src={quest.img}
            />
            <div className="flex justify-between items-center w-full px-4 my-2">
              <span className="teext-lg font-bold">{quest.name}</span>
              <Button className="bg-yellow-500 px-3 text-xs">
                {quest.status}
              </Button>
            </div>
            <div className="mx-4 pb-2 text-xs  text-justify">{quest.desc}</div>

            <div className="flex justify-between gap-2 items-center text-xs">
              <span className="border border-neutral-900 p-1 rounded">
                10 questions
              </span>
              <span className="border border-neutral-900 p-1 rounded ">
                10,000 points
              </span>
              <span className="p-1 font-bold text-yellow-500">
                1 unique NFT
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Play;
