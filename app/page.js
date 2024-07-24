import Link from "next/link";
import Login from "./components/Game/Login";
import Web3Login from "./components/Game/Web3Login";

export default function Home() {
  return (
    <main>
        <Link href="/referrals">Referrals</Link>
        <Login/>
        {/* <Web3Login/> */}
    </main>
  );
}
