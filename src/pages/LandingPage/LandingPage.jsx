import "./LandingPage.css";

export default function LandingPage({ user }) {
  return (
    user ? (
      <div className="landing-page">
        <h1 className="landing-page-title">Welcome to Your Golf App, {user}!</h1>
        <p className="landing-page-text">Here, you can track your golf rounds, analyze your performance, and improve your game.</p>
        <p className="landing-page-text">Start by adding a new round or explore your past rounds to see how you've progressed.</p>
      </div>
    ) : (
      <div className="landing-page">
        <h1 className="landing-page-title">Welcome to Birdie Tracker!</h1>
        <p className="landing-page-text">Here, you can track your golf rounds, analyze your performance, and improve your game.</p>
        <p className="landing-page-text">Start by logging in or signing up.</p>
      </div>
    )
  );
}
