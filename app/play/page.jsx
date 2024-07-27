import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";

const Play = () => {
  const quests = [
    {
      id: 1,
      name: "Quest 1",
      status: "play now",
      href: "/play/quest-1",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "In ChainTrail, players are presented with four images and must guess the word that connects them. The game incorporates elements of blockchain and crypto, with players earning and using tokens as they solve puzzles.",
    },
    {
      id: 2,
      name: "Quest 2",
      status: "play now",
      href: "/Admin/new-question",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "In ChainTrail, players are presented with four images and must guess the word that connects them. The game incorporates elements of blockchain and crypto, with players earning and using tokens as they solve puzzles.",
    },
    {
      id: 3,
      name: "Quest 3",
      status: "play now",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "In ChainTrail, players are presented with four images and must guess the word that connects them. The game incorporates elements of blockchain and crypto, with players earning and using tokens as they solve puzzles.",
    },
    {
      id: 4,
      name: "Quest 4",
      status: "locked",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "In ChainTrail, players are presented with four images and must guess the word that connects them. The game incorporates elements of blockchain and crypto, with players earning and using tokens as they solve puzzles.",
    },
    {
      id: 5,
      name: "Quest 5",
      status: "locked",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "In ChainTrail, players are presented with four images and must guess the word that connects them. The game incorporates elements of blockchain and crypto, with players earning and using tokens as they solve puzzles.",
    },
    {
      id: 6,
      name: "Quest 6",
      status: "locked",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "In ChainTrail, players are presented with four images and must guess the word that connects them. The game incorporates elements of blockchain and crypto, with players earning and using tokens as they solve puzzles.",
    },
    {
      id: 7,
      name: "Quest 7",
      status: "locked",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "In ChainTrail, players are presented with four images and must guess the word that connects them. The game incorporates elements of blockchain and crypto, with players earning and using tokens as they solve puzzles.",
    },
    {
      id: 8,
      name: "Quest 8",
      status: "locked",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "In ChainTrail, players are presented with four images and must guess the word that connects them. The game incorporates elements of blockchain and crypto, with players earning and using tokens as they solve puzzles.",
    },
    {
      id: 9,
      name: "Quest 9",
      status: "locked",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "In ChainTrail, players are presented with four images and must guess the word that connects them. The game incorporates elements of blockchain and crypto, with players earning and using tokens as they solve puzzles.",
    },
    {
      id: 10,
      name: "Quest 10",
      status: "locked",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "In ChainTrail, players are presented with four images and must guess the word that connects them. The game incorporates elements of blockchain and crypto, with players earning and using tokens as they solve puzzles.",
    },
    {
      id: 11,
      name: "Quest 11",
      status: "locked",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "In ChainTrail, players are presented with four images and must guess the word that connects them. The game incorporates elements of blockchain and crypto, with players earning and using tokens as they solve puzzles.",
    },
    {
      id: 12,
      name: "Quest 12",
      status: "locked",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "In ChainTrail, players are presented with four images and must guess the word that connects them. The game incorporates elements of blockchain and crypto, with players earning and using tokens as they solve puzzles.",
    },
    {
      id: 13,
      name: "Quest 13",
      status: "locked",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "In ChainTrail, players are presented with four images and must guess the word that connects them. The game incorporates elements of blockchain and crypto, with players earning and using tokens as they solve puzzles.",
    },
    {
      id: 14,
      name: "Quest 14",
      status: "locked",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "In ChainTrail, players are presented with four images and must guess the word that connects them. The game incorporates elements of blockchain and crypto, with players earning and using tokens as they solve puzzles.",
    },
    {
      id: 15,
      name: "Quest 15",
      status: "locked",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "In ChainTrail, players are presented with four images and must guess the word that connects them. The game incorporates elements of blockchain and crypto, with players earning and using tokens as they solve puzzles.",
    },
  ];

  return (
    <section className="mt-20 min-w-[300px] w-full">
      <h1 className="flex justify-between items-center mx-4 my-2">
        <div className="font-bold text-lg">Quests</div>
        <div className="flex gap-3 cursor-pointer">
          <FaChevronLeft />
          <FaChevronRight />
        </div>
      </h1>
      <div className=" w-full ">
        {quests.map((quest) => (
          <Link
            key={quest.id}
            href={quest.href}
            className="border border-yellow-900 w-72 rounded-xl pb-3 bg-neutral-800 hover:bg-neutral-950 mb-2 flex flex-col justify-between items-center">
            <img
              className=" rounded-xl h-36 object-cover w-full "
              src={quest.img}
            />
            <div className="flex justify-between items-center w-full px-4 my-2">
              <span className="teext-lg font-bold">{quest.name}</span>
              <span className="text-xs capitalize bg-yellow-700 p-2 rounded ">
                {quest.status}
              </span>
            </div>
            <div className="mx-4 pb-2 text-xs text-neutral-400 text-justify">
              {quest.desc}
            </div>

            <div className="flex justify-between gap-2 items-center text-xs">
              <span className="border text-yellow-500 border-yellow-500 p-1 rounded">
                1 unique NFT
              </span>
              <span className="border border-yellow-500 p-1 rounded text-yellow-500">
                10,000 points
              </span>
              <span className="border text-yellow-500 border-yellow-500 p-1 rounded">
                10 questions
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Play;
