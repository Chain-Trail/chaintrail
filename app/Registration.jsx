"use client";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export default function AutoRegisterUser({ children }) {
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
    <UserContext.Provider value={{ userInfo, registrationStatus, userPoints }}>
      {children}
    </UserContext.Provider>
  );
}
