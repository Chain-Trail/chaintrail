"use client";

import { createContext, useContext, useEffect, useState } from "react";

const TelegramAuthContext = createContext();

export default function TelegramAuthProvider({ children }) {
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
      setIsLoading(false);
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
      console.log(data);
      // You can handle the registration response here if needed
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <TelegramAuthContext.Provider value={{ userInfo, isLoading }}>
      {children}
    </TelegramAuthContext.Provider>
  );
}

export function useTelegramAuth() {
  return useContext(TelegramAuthContext);
}
