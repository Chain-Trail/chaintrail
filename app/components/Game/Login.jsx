"use client";

import { useEffect, useState } from "react";

export default function Login() {
  const [userInfo, setUserInfo] = useState(null);
  const [registrationStatus, setRegistrationStatus] = useState("");
  const [userPoints, setUserPoints] = useState(0);
  const [canClaimReward, setCanClaimReward] = useState(false);
  const [timeUntilNextClaim, setTimeUntilNextClaim] = useState(null);

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
      checkDailyRewardStatus(userId);
    } catch (error) {
      console.error("Error:", error);
      setRegistrationStatus("Error registering user");
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
  const claimDailyReward = async () => {
    if (!userInfo || !userInfo.id) return;

    try {
      const response = await fetch("/api/register", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: userInfo.id }),
      });
      const data = await response.json();
      if (response.ok) {
        setUserPoints(data.points);
        setCanClaimReward(false);
        updateNextClaimTime(new Date(data.nextClaimTime));
      } else {
        console.error("Failed to claim daily reward:", data.message);
      }
    } catch (error) {
      console.error("Error claiming daily reward:", error);
    }
  };

  const checkDailyRewardStatus = async (userId) => {
    try {
      const response = await fetch("/api/register", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      });
      const data = await response.json();
      if (response.ok) {
        setCanClaimReward(true);
      } else {
        updateNextClaimTime(new Date(data.nextClaimTime));
      }
    } catch (error) {
      console.error("Error checking daily reward status:", error);
    }
  };

  const updateNextClaimTime = (nextClaimTime) => {
    const updateTimer = () => {
      const now = new Date();
      const timeDiff = nextClaimTime - now;
      if (timeDiff <= 0) {
        setCanClaimReward(true);
        setTimeUntilNextClaim(null);
      } else {
        const hours = Math.floor(timeDiff / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        setTimeUntilNextClaim(`${hours}h ${minutes}m ${seconds}s`);
        setTimeout(updateTimer, 1000);
      }
    };
    updateTimer();
  };
  useEffect(() => {
    if (userInfo && userInfo.id) {
      fetchUserPoints(userInfo.id);
      checkDailyRewardStatus(userInfo.id);
    }
  }, [userInfo]);

  if (!userInfo) {
    return;
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
        <div>Points: {userPoints}</div>
        <button
          className="my-4 text-center border bg-yellow-800 text-white block p-2 rounded-lg hover:bg-yellow-700 cursor-pointer"
          onClick={claimDailyReward}
          disabled={!canClaimReward}>
          {canClaimReward
            ? "Claim Daily Reward"
            : `Next claim in ${timeUntilNextClaim || "Loading..."}`}
        </button>
      </div>
    </div>
  );
}
