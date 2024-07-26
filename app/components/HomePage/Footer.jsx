import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const teamMembers = [
    {
      name: "Okoye Kevin Chibuoyim",
      role: "Project Manager",
      image: "/team/photo_2024-07-24_20-18-21.jpg",
      github: "https://github.com/KevinChibuoyim",
    },
    {
      name: "Okeke Chinedu Emmanuel",
      role: "Frontend Developer",
      image: "/team/photo_2024-07-24_20-23-00.jpg",
      github: "https://github.com/chiscookeke11",
    },
    {
      name: "Damian Olebuezie ",
      role: "Smart Contract Developer",
      image: "/team/photo_2024-07-25_02-29-08.jpg",
      github: "https://github.com/czDamian",
    },
    {
      name: "Agbasieje Peace Chioma",
      role: "UI/UX Designer",
      image: "/team/photo_2024-07-25_02-29-06.jpg",
      twitter: "https://x.com/oluwa_chioma/status/1786824275749486960?s=46",
    },
    {
      name: "Princewill Emeka",
      role: "Backend Developer",
      image: "/team/photo_2024-07-25_02-29-03.jpg",
      github: "https://github.com/Prnzwil",
    },{
      name: "Osatuyi Flora",
      role: "UI/UX Designer",
      image: "/team/photo_2024-07-25_02-29-03.jpg",
      github: "https://x.com/oluwa_chioma",
    },
  ];

  return (
    <footer className=" w-full bg-neutral-900 py-12">
      <div className=" px-4">
        <div className="">
          <div className="bg-neutral-950 p-2 my-4 rounded-lg">
            <h1 className="text-3xl font-bold mb-6">Meet Our Team</h1>
            <div className="">
              {teamMembers.map((member, index) => (
                <Link
                  key={index}
                  href={member.github || member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block">
                  <div className=" overflow-hidden flex items-center justify-start hover:bg-slate-950 rounded-lg px-1">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={50}
                      height={50}
                      className=" w-[50px] h-[50px] rounded-full object-cover"
                    />
                    <div className="p-4">
                      <h5 className="font-bold">{member.name}</h5>
                      <p className="text-gray-600">{member.role}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="footer-info">
            <h2 className="text-2xl font-bold mb-4">News & Information</h2>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:underline">
                  News
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:underline">
                  Learn About Web 3
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-600">
        <span>2024 CryptoTrail</span>
      </div>
    </footer>
  );
};

export default Footer;
