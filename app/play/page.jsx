import Link from "next/link";

const Play = () => {
  const quests = [
    { id: 1, name: "Quest 1", href: "#" },
    { id: 2, name: "Quest 2", href: "#" },
    { id: 3, name: "Quest 3", href: "#" },
    { id: 4, name: "Quest 4", href: "#" },
    { id: 5, name: "Quest 5", href: "#" },
    { id: 6, name: "Quest 6", href: "#" },
    { id: 7, name: "Quest 7", href: "#" },
    { id: 8, name: "Quest 8", href: "#" },
    { id: 9, name: "Quest 9", href: "#" },
    { id: 10, name: "Quest 10", href: "#" },
  ];

  return (
    <section className="mt-20 w-full ">
      <div className=" w-full ">
        {quests.map((quest) => (
          <Link key={quest.id} href={quest.href} className=" py-3 px-8 bg-neutral-800 hover:bg-neutral-950 mb-2 w-full block">
            {quest.name}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Play;
