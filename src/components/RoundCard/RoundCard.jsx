import "./RoundCard.css";
import { Link } from "react-router-dom";

export default function RoundCard({ round }) {

  return (
    <Link to={`${round._id}`}>
      <div className="card">
        <div className="card-content">
          <h2 className="course-name">Course: {round.course.name}</h2>
          <p className="player-score">Date: {new Date(round.date).toLocaleDateString('en-US')}</p>
        </div>
      </div>
    </Link>
  );
}
