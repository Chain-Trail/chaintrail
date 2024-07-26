import Link from "next/link";
import Login from "./components/Game/Login";
import Footer from "./components/HomePage/Footer";
import Navbar from "./components/HomePage/Nav";
import NFTSection from "./components/HomePage/NftSection";
import HowToPlay from "./components/HomePage/HowToPlay";
import Partners from "./components/HomePage/Partners";

export default function Home() {
  return (
    <main className="mt-12">
      <Navbar />
      <div className="mb-4 mt-20 text-lg">
        <Link className="p-2 underline animate-pulse" href="/referrals ">
          Checkout Referrals
        </Link>
        <br />

        <Link className="p-2 underline animate-pulse" href="/play ">
          Or Play Game
        </Link>
        <NFTSection/>
        <HowToPlay/>
        <Partners/>
        <Footer />
      </div>
      <Login />
    </main>
  );
}
