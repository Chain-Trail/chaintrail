import Link from "next/link";

const Play = () => {
  const quests = [
    { id: 1, name: "Quest 1", status: "complete", href: "/play/quest-1" },
    { id: 2, name: "Quest 2", status: "complete", href: "#" },
    { id: 3, name: "Quest 3", status: "start", href: "#" },
    { id: 4, name: "Quest 4", status: "locked", href: "#" },
    { id: 5, name: "Quest 5", status: "locked", href: "#" },
    { id: 6, name: "Quest 6", status: "locked", href: "#" },
    { id: 7, name: "Quest 7", status: "locked", href: "#" },
    { id: 8, name: "Quest 8", status: "locked", href: "#" },
    { id: 9, name: "Quest 9", status: "locked", href: "#" },
    { id: 10, name: "Quest 10", status: "locked", href: "#" },
    { id: 11, name: "Quest 11", status: "locked", href: "#" },
    { id: 12, name: "Quest 12", status: "locked", href: "#" },
    { id: 13, name: "Quest 13", status: "locked", href: "#" },
    { id: 14, name: "Quest 14", status: "locked", href: "#" },
    { id: 15, name: "Quest 15", status: "locked", href: "#" },
  ];

  return (
    <section className="mt-20 min-w-[300px] w-full">
      <h1></h1>
      <div className=" w-full ">
        {quests.map((quest) => (
          <Link
            key={quest.id}
            href={quest.href}
            className=" py-3 px-8 bg-neutral-800 hover:bg-neutral-950 mb-2 w-full flex justify-between items-center rounded">
            <span>{quest.name}</span>
            <span className="text-xs bg-yellow-800 p-1 rounded ">
              {quest.status}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Play;
