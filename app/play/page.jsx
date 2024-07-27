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
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores accusamus officia quidem ab optio reprehenderit accusantium quasi praesentium assumenda.",
    },
    {
      id: 2,
      name: "Quest 2",
      status: "play now",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores accusamus officia quidem ab optio reprehenderit accusantium quasi praesentium assumenda.",
    },
    {
      id: 3,
      name: "Quest 3",
      status: "play now",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores accusamus officia quidem ab optio reprehenderit accusantium quasi praesentium assumenda.",
    },
    {
      id: 4,
      name: "Quest 4",
      status: "locked",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores accusamus officia quidem ab optio reprehenderit accusantium quasi praesentium assumenda.",
    },
    {
      id: 5,
      name: "Quest 5",
      status: "locked",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores accusamus officia quidem ab optio reprehenderit accusantium quasi praesentium assumenda.",
    },
    {
      id: 6,
      name: "Quest 6",
      status: "locked",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores accusamus officia quidem ab optio reprehenderit accusantium quasi praesentium assumenda.",
    },
    {
      id: 7,
      name: "Quest 7",
      status: "locked",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores accusamus officia quidem ab optio reprehenderit accusantium quasi praesentium assumenda.",
    },
    {
      id: 8,
      name: "Quest 8",
      status: "locked",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores accusamus officia quidem ab optio reprehenderit accusantium quasi praesentium assumenda.",
    },
    {
      id: 9,
      name: "Quest 9",
      status: "locked",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores accusamus officia quidem ab optio reprehenderit accusantium quasi praesentium assumenda.",
    },
    {
      id: 10,
      name: "Quest 10",
      status: "locked",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores accusamus officia quidem ab optio reprehenderit accusantium quasi praesentium assumenda.",
    },
    {
      id: 11,
      name: "Quest 11",
      status: "locked",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores accusamus officia quidem ab optio reprehenderit accusantium quasi praesentium assumenda.",
    },
    {
      id: 12,
      name: "Quest 12",
      status: "locked",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores accusamus officia quidem ab optio reprehenderit accusantium quasi praesentium assumenda.",
    },
    {
      id: 13,
      name: "Quest 13",
      status: "locked",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores accusamus officia quidem ab optio reprehenderit accusantium quasi praesentium assumenda.",
    },
    {
      id: 14,
      name: "Quest 14",
      status: "locked",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores accusamus officia quidem ab optio reprehenderit accusantium quasi praesentium assumenda.",
    },
    {
      id: 15,
      name: "Quest 15",
      status: "locked",
      href: "#",
      img: "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores accusamus officia quidem ab optio reprehenderit accusantium quasi praesentium assumenda.",
    },
  ];

  return (
    <section className="mt-20 min-w-[300px] w-full">
      <h1></h1>
      <div className=" w-full ">
        {quests.map((quest) => (
          <Link
            key={quest.id}
            href={quest.href}
            className="border border-gray-400 w-72 rounded-xl pb-3 bg-neutral-800 hover:bg-neutral-950 mb-2 flex flex-col justify-between items-center">
            <img
              className=" rounded-xl h-36 object-cover w-full "
              src={quest.img}
            />
            <div className="flex justify-between items-center w-full px-4 my-2">
              <span className="teext-lg font-bold">{quest.name}</span>
              <span className="text-xs bg-yellow-800 p-1 rounded ">
                {quest.status}
              </span>
            </div>
            <div className="mx-4 pb-2 text-xs text-neutral-400 text-justify">
              {quest.desc}
            </div>

            <div className="flex justify-between gap-2 items-center text-xs">
              <span className="border border-gray-500 p-1 rounded">
                1 unique NFT
              </span>
              <span className="border border-gray-500 p-1 rounded">
                10,000 points
              </span>
              <span className="border border-gray-500 p-1 rounded">
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
