import { useEffect, useState } from "react";
import { getRoundById } from "../../utilities/rounds-api";
import { useParams } from "react-router-dom";
import { deleteRoundById } from "../../utilities/rounds-api";

export default function RoundDetailPage() {
  const [round, setRound] = useState(null);
  const roundId = useParams();

  useEffect(() => {
    const fetchRound = async () => {
      const roundData = await getRoundById(roundId.id);
      setRound(roundData);
    };

    fetchRound();
  }, []);

  const handleDeleteRound = async () => {
    try {
      await deleteRoundById(roundId.id);
    } catch (error) {
      console.error("Error deleting round:", error);
    }
  };

  return (
    <>
      {round ? (
        <>
          <p>
            Date: {new Date(round.date).toLocaleDateString("en-US")}
          </p>
          <h1 className="courseName">Course Name: {round.course.name}</h1>
          <h2>Score: {round.score}</h2>
          <h3>Tee's played: {round.teeBox}</h3>

          {round.notes ? (
            <>
              <br />
              <h1>Notes</h1>
              <p>{round.notes}</p>
            </>
          ) : (
            <></>
          )}
          <button onClick={handleDeleteRound}>Delete Round</button>
        </>
      ) : (
        <p> No Round Found</p>
      )}
    </>
  );
}
