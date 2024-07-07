import "./LandingPage.css";
import { Link } from "react-router-dom";

export default function LandingPage({ user }) {
  return (
    <>
    {user ? (
      <div className="landing-page">
        <p className="landing-page-text">Here, you can track your golf rounds, analyze your performance, and improve your game.</p>
        <p className="landing-page-text">Start by adding a new round or explore your past rounds to see how you've progressed.</p>
        <Link to="/rounds/new" className="landing-page-link">
          Create a New round
        </Link>
      </div>
    ) : (
      <div className="landing-page">
        <img className="logo" src="https://i.imgur.com/QlddchK.png" title="source: imgur.com" />
        <h1 className="landing-page-title">Welcome to Circle2!</h1>
        <p className="landing-page-text">Here, you can track your golf rounds, analyze your performance, and improve your game.</p>
        <p className="landing-page-text">Start by logging in or signing up.</p>
      </div>
    )}
  </>
  );
}
