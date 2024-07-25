import Link from "next/link";
import Login from "./components/Game/Login";
import Web3Login from "./components/Game/Web3Login";

export default function Home() {
  return (
    <main className="mt-12">
      <div className="mb-4 text-lg">
        <Link className="p-2 underline animate-pulse" href="/referrals ">
          Checkout Referrals
        </Link>
        <br />
        <Link className="p-2 underline animate-pulse" href="/play ">
          Or Play Game
        </Link>
      </div>
      <Login />
      {/* <Web3Login/> */}
    </main>
  );
}
