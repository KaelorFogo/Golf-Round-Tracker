import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "./NavBar.css";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="nav-bar">
      <div className="nav-left">
      <Link to="/" className="nav-link-home">
      <img className="nav-logo" src="https://i.imgur.com/QlddchK.png" title="source: imgur.com" />
        </Link>
        <span className="separator">|</span>
        <Link to="/rounds" className="nav-link">
          Rounds
        </Link>
        <span className="separator">|</span>
        <Link to="/handicap" className="nav-link">
          Your Handicap
        </Link>
      </div>
      <span className="welcome">Welcome, {user.name}</span>
      <Link to="" className="logout" onClick={handleLogOut}>
        Log Out
      </Link>
    </nav>
  );
}
