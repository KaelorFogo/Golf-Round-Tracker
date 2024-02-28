import { useEffect, useState } from "react";
import * as roundAPI from "../../utilities/rounds-api";
import RoundCard from "../../components/RoundCard/RoundCard";
import "./RoundPage.css";

export default function NewOrderPage() {
  const [rounds, setRounds] = useState(null);

  useEffect(() => {
    async function fetchRounds() {
      try {
        const allUserRounds = await roundAPI.getAllRoundsForuser();
        setRounds(allUserRounds);
      } catch (error) {
        console.error("Error fetching rounds:", error);
      }
    }

    fetchRounds();
  }, []);

  return (
    <div className="RoundPage">
      <h1>Your Rounds</h1>
      <div className="ScoreCard">
        {rounds ? (
          <ul>
            {rounds.map((round) => (
              <RoundCard key={round._id} round={round} />
            ))}
          </ul>
        ) : (
          <p>No Rounds played yet...</p>
        )}
      </div>
    </div>
  );
}
