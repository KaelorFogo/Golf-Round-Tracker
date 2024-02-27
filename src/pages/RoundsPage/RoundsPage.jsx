import { useEffect, useState } from "react";
import * as roundAPI from "../../utilities/rounds-api";

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
    <>
      <h1>Your Rounds</h1>
      {rounds ? (
        <ul>
          {rounds.map((round) => (
            <li key={round._id}>{round.course}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
