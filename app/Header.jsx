import Login from "./components/Game/Login";
import Footer from "./components/HomePage/Footer";
import NFTSection from "./components/HomePage/NftSection";
import HowToPlay from "./components/HomePage/HowToPlay";
import Partners from "./components/HomePage/Partners";
import Hero from "./components/HomePage/Hero";

export default function Header() {
  return (
    <main className="mt-20">
      <Hero />
      <NFTSection />
      <HowToPlay />
      <Partners />
      <Footer />
      <Login />
    </main>
  );
}
