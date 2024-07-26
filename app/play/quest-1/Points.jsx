import { useEffect, useState, useContext } from "react";
import AutoRegisterUser from "@/app/Registration";

const UserPoints = () => {
    const context = useContext(AutoRegisterUser);

    if (!context) {
      return <div>Error: UserContext not available.</div>;
    }

  const { userId, userPoints, setUserPoints } = useContext(AutoRegisterUser);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserPoints = async () => {
      if (!userId) {
        setError("User ID is not available.");
        console.log("unregistered user");
        return;
      }
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
  }, [userId, setUserPoints]);

  return <div>{error ? <span>{error}</span> : <span>{userPoints}</span>}</div>;
};

export default UserPoints;
