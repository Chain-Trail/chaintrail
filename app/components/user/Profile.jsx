import { useState } from "react";
import Popup from "../HomePage/Popup";
import { useTelegramAuth } from "@/app/TelegramAuthProvider";
import Button from "../Reusable/Button";

export default function Profile() {
  const { userInfo, isLoading } = useTelegramAuth();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  if (isLoading){
    return (
      <>
        <div
          onClick={openPopup}
          className="animate-bounce-in-down focus:outline-none">
          <Button className="bg-yellow-700 hover:bg-yellow-600">CONNECT</Button>
        </div>
        <Popup isOpen={isPopupOpen} onClose={closePopup} />
      </>
    );
  }

  if (!userInfo) {
    return (
      <>
        <div
          onClick={openPopup}
          className="animate-bounce-in-down focus:outline-none">
          <Button className="border border-white">CONNECT</Button>
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
