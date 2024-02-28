import { useEffect, useState } from "react";
import "./RoundCard.css";

export default function RoundCard({ round }) {
  return (
    <div className="card">
      <div className="card-content">
        <h2 className="course-name">Course: {round.course.name}</h2>{" "}
        <p className="player-score">
          Date: {new Date(round.date).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
