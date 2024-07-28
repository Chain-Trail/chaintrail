import SideNav from "../components/Reusable/SideNav";


const MoreCoins = () => {
  return (
    <section>
      <div className="">
        <div className="flex justify-between items-center">
          <h1 className="my-4 px-4">EARN MORE POINTS</h1>
          <SideNav />
        </div>
        <div className="flex mt-20 gap-4 items-center justify-center ">
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
    </section>
  );
};
export default MoreCoins;
