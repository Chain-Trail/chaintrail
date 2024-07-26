import { useEffect, useState } from "react";

const UserPoints = ({ userId }) => {
  const [userPoints, setUserPoints] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserPoints = async () => {
      try {
        const response = await fetch(`/api/register?userId=${userId}`);
        const data = await response.json();
        console.log(data);
        if (response.ok) {
            console.log(data.points);
          setUserPoints(data.points);
        } else {
          setError(data.message);
        }
      } catch (error) {
        setError("Error fetching user points");
        console.error("Error fetching user points:", error);
      }
    };

    fetchUserPoints();
  }, [userId]);

  return <div>{error ? <span>{error}</span> : <span>{userPoints}</span>}</div>;
};

export default UserPoints;
