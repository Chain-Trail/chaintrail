"use client";

import { createContext, useContext, useEffect, useState } from "react";

const TelegramAuthContext = createContext();

export default function TelegramAuthProvider({ children }) {
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userPoints, setUserPoints] = useState(true);
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
      setRegistrationStatus(data.message);
      setUserPoints(data.points);
      // Set and fetch user points from registration response
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };
  const fetchUserPoints = async (userId) => {
    try {
      const response = await fetch(`/api/register?userId=${userId}`);
      const data = await response.json();
      if (response.ok) {
        setUserPoints(data.points);
      }
    } catch (error) {
      console.error("Error fetching user points:", error);
    }
  };
  useEffect(() => {
    if (userInfo && userInfo.id) {
      fetchUserPoints(userInfo.id);
    }
  }, [userInfo]);

const updatePoints = async (increment) => {
  setUserPoints((prevPoints) => prevPoints + increment);

  // API call to update the points on the server
  try {
    const response = await fetch("/api/points", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: userInfo.id, increment }), // Assuming you have userInfo from the context
    });

    if (!response.ok) {
      throw new Error("Failed to update points on the server");
    }

    const data = await response.json();
    console.log("Points updated successfully on the server:", data);
  } catch (error) {
    console.error("Error updating points:", error.message, error.stack);
    // Optionally, revert the local points update in case of an error
    setUserPoints((prevPoints) => prevPoints - increment);
  }
};






  return (
    <TelegramAuthContext.Provider
      value={{ userInfo, isLoading, userPoints, updatePoints }}>
      {children}
    </TelegramAuthContext.Provider>
  );
}

export function useTelegramAuth() {
  return useContext(TelegramAuthContext);
}
