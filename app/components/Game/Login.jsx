"use client";

import { useEffect, useState } from "react";

export default function Login() {
  const [userInfo, setUserInfo] = useState(null);
  const [registrationStatus, setRegistrationStatus] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-web-app.js";
    script.async = true;
    script.onload = () => {
      window.Telegram.WebApp.ready();
      const user = window.Telegram.WebApp.initDataUnsafe.user;
      if (user && user.id) {
        setUserInfo(user);
        registerUser(user.id, user.username || "");
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const registerUser = async (userId, username) => {
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, username }),
      });
      const data = await response.json();
      setRegistrationStatus(data.message);
    } catch (error) {
      console.error("Error:", error);
      setRegistrationStatus("Error registering user");
    }
  };

  if (!userInfo) {
    return (
      <div className="bg-white text-black p-4 rounded-xl">
        Please open this app on your Telegram
        <a
          href="https://t.me/TWAczbot"
          className="my-4 text-center border bg-yellow-800 text-white block p-2 rounded-lg hover:bg-yellow-700 cursor-pointer">
          Open
        </a>
      </div>
    );
  }

  return (
    <div>
      <div className="hidden">
        <p>Platform: {window.Telegram.WebApp.platform}</p>
        <p>User ID: {userInfo.id}</p>
        <p>First Name: {userInfo.first_name}</p>
        <p>Username: {userInfo.username || "N/A"}</p>
        <p>Premium User: {userInfo.is_premium ? "Yes" : "No"}</p>
      </div>
      <div>
        <p>
          {registrationStatus} {userInfo.username || "N/A"}
        </p>
      </div>
    </div>
  );
}
