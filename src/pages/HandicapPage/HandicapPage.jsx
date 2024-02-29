import * as roundAPI from "../../utilities/rounds-api";
import { useEffect, useState } from "react";

export default function HandicapPage() {
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
    <h1>Your Handicap</h1>
  );
}
