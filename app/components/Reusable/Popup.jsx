import Image from "next/image";

export const Success = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white">
      <div className="relative w-screen h-screen ">
        <Image
          src="/btn/success.png"
          alt="success background"
          width={1000}
          height={1000}
          className="absolute inset-0 w-full h-full "
        />
        <div className="absolute inset-0 bg-black bg-opacity-90"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-green-500 font-bold text-2xl mb-2">Correct !</div>
            <div className="text-xl max-w-[250px]">
              You picked the right answer and earned +1000 points
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Wrong = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white">
      <div className="relative w-screen h-screen ">
        <Image
          src="/btn/success.png"
          alt="success background"
          width={1000}
          height={1000}
          className="absolute inset-0 w-full h-full "
        />
        <div className="absolute inset-0 bg-black bg-opacity-90"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-red-500 font-bold text-2xl mb-2">Incorrect !</div>
            <div className="text-xl max-w-[250px]">
              You picked the wrong answer and earned +0 points
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
