import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "./components/HomePage/Nav";
import TelegramAuthProvider from "./TelegramAuthProvider";

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
        <TelegramAuthProvider>
          <Navbar />
          {children}
        </TelegramAuthProvider>
      </body>
    </html>
  );
}
