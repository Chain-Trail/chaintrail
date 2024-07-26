"use client";

import { useEffect, useState } from "react";

export default function AutoRegisterUser() {
  const [userInfo, setUserInfo] = useState(null);
  const [registrationStatus, setRegistrationStatus] = useState("");
  const [userPoints, setUserPoints] = useState(0);

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
      setUserPoints(data.points); // Set user points from registration response
    } catch (error) {
      console.error("Error:", error);
      setRegistrationStatus("Error registering user");
    }
  };

  return (
    <div className="hidden">
      <div className="">
        <p>User ID: {userInfo ? userInfo.id : "N/A"}</p>
      </div>
      <div>
        <p>
          {registrationStatus} {userInfo ? userInfo.username : "N/A"}
        </p>
        <div>Points: {userPoints}</div>
      </div>
    </div>
  );
}
