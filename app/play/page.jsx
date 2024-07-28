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
      desc: "Players are presented with four images and must guess the word that connects them.  ",
    },
    {
      id: 2,
      name: "Chain Quest",
      status: "play",
      href: "/Admin/new-question",
      img: "/mainNft2.svg",
      desc: "Players are presented with four images and must guess the word that connects them.  ",
    },
    {
      id: 3,
      name: "God's Eye",
      status: "play",
      href: "#",
      img: "/quest/bitcoin2.jpg",
      desc: "Players are presented with four images and must guess the word that connects them.  ",
    },
    {
      id: 4,
      name: "IQ Trail",
      status: "locked",
      href: "#",
      img: "/mainNft2.svg",
      desc: "Players are presented with four images and must guess the word that connects them.  ",
    },
    {
      id: 5,
      name: "Block Map",
      status: "locked",
      href: "#",
      img: "/quest/bitcoin3.jpg",
      desc: "Players are presented with four images and must guess the word that connects them.  ",
    },
    {
      id: 6,
      name: "Quest 6",
      status: "locked",
      href: "#",
      img: "/mainNft3.svg",
      desc: "Players are presented with four images and must guess the word that connects them.  ",
    },
    {
      id: 7,
      name: "Quest 7",
      status: "locked",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "Players are presented with four images and must guess the word that connects them.  ",
    },
    {
      id: 8,
      name: "Quest 8",
      status: "locked",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "Players are presented with four images and must guess the word that connects them.  ",
    },
    {
      id: 9,
      name: "Quest 9",
      status: "locked",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "Players are presented with four images and must guess the word that connects them.  ",
    },
    {
      id: 10,
      name: "Quest 10",
      status: "locked",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "Players are presented with four images and must guess the word that connects them.  ",
    },
    {
      id: 11,
      name: "Quest 11",
      status: "locked",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "Players are presented with four images and must guess the word that connects them.  ",
    },
    {
      id: 12,
      name: "Quest 12",
      status: "locked",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "Players are presented with four images and must guess the word that connects them.  ",
    },
    {
      id: 13,
      name: "Quest 13",
      status: "locked",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "Players are presented with four images and must guess the word that connects them.  ",
    },
    {
      id: 14,
      name: "Quest 14",
      status: "locked",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "Players are presented with four images and must guess the word that connects them.  ",
    },
    {
      id: 15,
      name: "Quest 15",
      status: "locked",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "Players are presented with four images and must guess the word that connects them.  ",
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
      <div className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {quests.map((quest) => (
          <Link
            key={quest.id}
            href={quest.href}
            className="border border-neutral-400 w-72 md:w-72 rounded-xl pb-3 bg-[#363636] hover:bg-neutral-800 mb-2 flex flex-col justify-between items-center">
            <img
              className=" rounded-xl h-32 object-cover w-full "
              src={quest.img}
            />
            <div className="flex justify-between items-center w-full px-2 my-2">
              <span className="uppercase font-bold">{quest.name}</span>
              <Button className="bg-yellow-500 px-3 text-black text-xs">
                {quest.status}
              </Button>
            </div>
            <div className="mx-2 pb-2 text-xs  text-justify">{quest.desc}</div>

            <div className="flex justify-between gap-2 items-center text-xs px-2 w-full">
              <span className="border border-neutral-900 p-2 rounded-md">
                10 questions
              </span>
              <span className="border border-neutral-900 p-2 rounded-md ">
                10,000 points
              </span>
              <span className="p-2 font-bold text-yellow-500 border border-yellow-500 rounded-md">
                1 NFT
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Play;
