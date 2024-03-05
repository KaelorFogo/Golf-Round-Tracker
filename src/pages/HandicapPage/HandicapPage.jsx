import * as roundAPI from "../../utilities/rounds-api";
import { useEffect, useState } from "react";
import "./HandicapPage.css"

export default function HandicapPage() {
  const [rounds, setRounds] = useState(null);
  const [bestScores, setBestScores] = useState(null);

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

  useEffect(() => {
    async function bestRounds() {
      if (!rounds) return;

      const bestRounds = rounds
        .map((round) => {
          const selectedTeeBoxIndex = round.course.teeBoxes.findIndex(
            (teeBox) => teeBox.tee === round.teeBox
          );
          const handicap = round.course.teeBoxes[selectedTeeBoxIndex].handicap;
          const slope = round.course.teeBoxes[selectedTeeBoxIndex].slope;
          return { handicap, score: round.score , slope: slope};
        })
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);

      setBestScores(bestRounds);
    }

    bestRounds();
  }, [rounds]);

  const handicapIndex = () => {
    if (!bestScores) return null;
  
    let scoreDifferentials = bestScores.map((round) => {
      let courseRatingIndex = 113 / round.handicap; 
      return courseRatingIndex * (round.score - round.handicap); 
    });
  
    let sumDifferentials = scoreDifferentials.reduce(
      (acc, val) => acc + val,
      0
    );
    let averageDifferential = sumDifferentials / bestScores.length;
    let handicapIndex = averageDifferential * 0.96;
  
    return handicapIndex;
  };
  

  return (
    <div>
      <h2>Your</h2>
      <h5>(estimated)</h5>
      <h2 className="handicap">Handicap</h2><br />
      <h1 className="handicapNum">{handicapIndex() > 0 ? '+' : '' }{Math.floor(handicapIndex() * 10) / 10}</h1>
    </div>
  );
}
