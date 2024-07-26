"use client"
import { useEffect, useState } from "react";

const UserPoints = ({ userId }) => {
  const [points, setPoints] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserPoints = async () => {
      try {
        const response = await fetch(`/api/register?userId=${userId}`);
        if (response.ok) {
          const data = await response.json();
          setPoints(data.points);
        } else {
          const errorData = await response.json();
          setError(errorData.message);
        }
      } catch (error) {
        setError("Server error");
      }
    };

    fetchUserPoints();
  }, [userId]);

  return (
    <div>
      {error ? (
        <span>{error}</span>
      ) : points !== null ? (
        <span>{points}</span>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};

export default UserPoints;
