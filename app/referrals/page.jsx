import { IoCopy } from "react-icons/io5";
import SideNav from "../components/Reusable/SideNav";

const Referrals = () => {
  return (
    <section className="px-8">
      <div className="flex justify-end mr-4 mt-6">
        <SideNav />
      </div>

      <div className="text-center my-6 text-2xl">
        <h1 className="font-bold ">INVITE FRIENDS!</h1>
        <p className="text-sm my-2">Refer & earn 1000 points</p>
        <div className="bg-neutral-700 p-4 rounded-lg text-sm flex justify-center gap-2 items-center mx-auto w-[300px] my-4">
          <input
            className="bg-neutral-700 text-neutral-200"
            type="text"
            name="referral"
            id="referral"
            value="https://t.me/chaintrailBotStart1234567890...."
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
    </section>
  );
};
export default Referrals;
