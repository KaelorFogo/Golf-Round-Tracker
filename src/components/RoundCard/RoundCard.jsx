import "./RoundCard.css";

export default function RoundCard({ round }) {
  const date = new Date(round.date).toLocaleDateString();

  return (
    <div className="card">
      <div className="card-content">
        <h2 className="course-name">Course: {round.course[0].name}</h2>
        <p className="player-score">Date: {date}</p>
      </div>
    </div>
  );
}
