import { useState } from "react";
import Image from "next/image";
import Popup from "../HomePage/Popup";
import { useTelegramAuth } from "@/app/TelegramAuthProvider";

export default function Profile() {
  const { userInfo, isLoading } = useTelegramAuth();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  if (isLoading) {
    return <div className="text-xs">verifying...</div>;
  }

  if (!userInfo) {
    return (
      <>
        <div
          onClick={openPopup}
          className="animate-bounce-in-down focus:outline-none cursor-pointer">
          <Image src="/btn/button2.png" alt="account" width={140} height={32} />
        </div>
        <Popup isOpen={isPopupOpen} onClose={closePopup} />
      </>
    );
  }

  return (
    <div>
      <p>Hi, {userInfo.username || userInfo.first_name}!</p>
      <Popup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
}
