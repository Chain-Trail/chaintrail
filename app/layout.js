import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "./components/HomePage/Nav";
import AutoRegisterUser from "./Registration";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export const metadata = {
  title: "Chain Trail",
  description: "earn NFTs while playing your favorite game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="grid place-content-center">
      <body className={`${lato.className}`}>
        <AutoRegisterUser/>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
