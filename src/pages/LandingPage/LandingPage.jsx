import "./LandingPage.css";

export default function LandingPage({ user }) {
  return (
    <>
    <img className="logo" src="https://i.imgur.com/QlddchK.png" title="source: imgur.com" />
    {user ? (
      <div className="landing-page">
        <h1 className="landing-page-title">Welcome to Circle2, {user}!</h1>
        <p className="landing-page-text">Here, you can track your golf rounds, analyze your performance, and improve your game.</p>
        <p className="landing-page-text">Start by adding a new round or explore your past rounds to see how you've progressed.</p>
      </div>
    ) : (
      <div className="landing-page">
        <h1 className="landing-page-title">Welcome to Circle2!</h1>
        <p className="landing-page-text">Here, you can track your golf rounds, analyze your performance, and improve your game.</p>
        <p className="landing-page-text">Start by logging in or signing up.</p>
      </div>
    )}
  </>
  );
}
