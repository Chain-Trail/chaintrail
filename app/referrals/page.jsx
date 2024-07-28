import Link from "next/link";
import { PiCaretRightBold } from "react-icons/pi";
import { IoCopy } from "react-icons/io5";
import { BsCalendar2Date } from "react-icons/bs";
import { FaTasks } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import Nfts from "./Nfts";

const Referrals = () => {
  return (
    <section className="px-8">
      <div className="">
        <h1 className="my-4 px-4">EARN MORE POINTS</h1>
        <div className="flex  gap-4 items-center justify-center ">
          <div className="w-[150px] bg-neutral-800 h-[150px] rounded-xl">
            <img
              src="coinsPana.svg"
              className=" h-max rounded-xl opacity-60 "
              alt="Earn coins"
            />
            <button className="text-white text-3xl py-2 px-4 rounded-xl  font-bold relative top-[-100px] right-[-20px]">
              +300
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-4 rounded-xl text-[12px] font-bold relative top-[-100px] right-[-60px]">
              Watch Now
            </button>
          </div>
          <div className=" w-[150px] bg-neutral-800 h-[150px] rounded-xl">
            <img
              src="ticketIcon.svg"
              className=" opacity-80 w-full"
              alt="Earn coins"
            />
            <button className="text-white text-2xl py-2 px-4 rounded-xl relative top-[-12px] right-[-50px]">
              1/1
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-4 rounded-xl text-[12px] font-bold relative top-[-25px] right-[-34px]">
              Use Daily Pass
            </button>
          </div>
        </div>
      </div>
      <div className="text-center my-12 text-2xl">
        <h1 className="font-bold ">INVITE FRIENDS!</h1>
        <p className="text-sm my-2">Refer & earn 1000 points</p>
        <div className="bg-neutral-700 p-4 rounded-lg text-sm flex justify-center gap-2 items-center mx-auto w-[300px] my-4">
          <input
            className="bg-neutral-700"
            type="text"
            name="referral"
            id="referral"
            placeholder="https://t.me/chaintrailBotStart1234567890...."
            readOnly
          />
          <span className="opacity-50">|</span>
          <span className="flex items-center gap-2 justify-between">
            copy <IoCopy className="cursor-pointer" />
          </span>
        </div>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black py-3 px-16 rounded-xl text-sm font-bold my-8">
          SHARE
        </button>
        <div className="flex items-center justify-center gap-2">
          <span>My referrals:</span>
          <span id="referrals" className="font-bold text-yellow-500">
            0
          </span>
        </div>
      </div>
      <div>
        <h1 className="my-4 px-4">EARN MORE REWARDS!</h1>
        <div className="flex items-center justify-between gap-2  rounded-lg mx-4">
          <div className=" flex flex-col items-center justify-center gap-8 w-40 h-30 p-3 rounded-xl bg-neutral-700 text-yellow-500 hover:bg-neutral-950 cursor-pointer">
            <BsCalendar2Date className="text-3xl " />
            <p className="text-[12px]">Daily Reward</p>
          </div>
          <div className=" flex flex-col items-center justify-center gap-8 w-40 h-30 p-3 rounded-xl bg-neutral-700">
            <FaTasks className="text-3xl " />
            <p className="text-sm">Daily Tasks</p>
          </div>
          <div className=" flex flex-col items-center justify-center gap-8 w-40 h-30 p-3 rounded-xl bg-neutral-700">
            <img src="challengeIcon.svg" alt="daily challenge" />
            <p className="text-sm">Challenges</p>
          </div>
        </div>
      </div>
      <div className="my-12 flex flex-col gap-4 mx-4">
        <h1>YOUR REWARDS!</h1>
        <div className="bg-neutral-700 flex gap-4 rounded-xl p-2">
          <img src="frameIq.svg" alt="iq" className="rounded-full " />
          <div className=" flex flex-col w-full text-sm gap-1">
            <p>IQ Count: Snail Lord</p>
            <div className="flex items-center justify-between text-sm">
              <span>74</span>
              <span>340</span>
            </div>
            <input
              className="accent-yellow-400"
              type="range"
              name="iqCount"
              value={74}
              max={340}
              id=""
            />
          </div>
        </div>
        <div className="bg-neutral-700 flex gap-4 rounded-xl p-2">
          <img
            src="star.svg"
            alt="iq"
            className="my-2 p-1 rounded-full bg-neutral-800"
          />
          <div className=" flex flex-col w-full text-sm gap-1">
            <p>IQ Count: Snail Lord</p>
            <div className="flex items-center justify-between text-sm">
              <span>1050</span>
              <span>3000</span>
            </div>
            <input
              className="accent-yellow-400"
              type="range"
              name="iqCount"
              value={1050}
              max={3000}
              id=""
            />
          </div>
        </div>
        <div className="bg-neutral-700 flex gap-4 rounded-xl p-2">
          <img
            src="frameIq1.svg"
            alt="iq"
            className=" p-2 my-1 rounded-full bg-neutral-800 "
          />
          <div className=" flex flex-col w-full text-sm gap-1">
            <p>IQ Count: Snail Lord</p>
            <div className="flex items-center gap-1">
              <img src="star.svg" alt="coins" />
              <p>450</p>
            </div>
          </div>
        </div>
      </div>
      <Nfts />
    </section>
  );
};
export default Referrals;
