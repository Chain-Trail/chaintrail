import Login from "./components/Game/Login";
import Footer from "./components/HomePage/Footer";
import Navbar from "./components/HomePage/Nav";
import NFTSection from "./components/HomePage/NftSection";
import HowToPlay from "./components/HomePage/HowToPlay";
import Partners from "./components/HomePage/Partners";
import Hero from "./components/HomePage/Hero";

export default function Header() {
  return (
    <main className="mt-12">
      <Navbar />
      <div className="mb-4 mt-20 text-lg">
        <Hero />
        <NFTSection />
        <HowToPlay />
        <Partners />
        <Footer />
      </div>
      <Login />
    </main>
  );
}
