import Button from "../Reusable/Button";
import { cinzel } from "../Reusable/Font";
const Partners = () => {
  return (
    <div className="bg-neutral-950 p-12 rounded-lg mb-8 text-center m-2 mx-4">
      <div className="">
        <h2 className={`text-4xl font-extrabold my-2 ${cinzel.className}`}>
          PARTNERS
        </h2>
        <p className="my-3">Know Our Partners & Sponsors</p>
        <Button className=" bg-gradient-to-b  from-[#1F1F1F] to-[#1F1F1F]  hover:from-[#1F1F1F]  hover:to-[#7a6703] my-4 focus:outline-none text-yellow-500 active:brightness-50">
          coming soon
        </Button>
      </div>
    </div>
  );
};
export default Partners;
