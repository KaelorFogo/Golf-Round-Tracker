import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "./NavBar.css";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <div className='Links'>
        <Link to="/rounds/new" className="nav-link">
          New Round
        </Link>
        <span className="separator">|</span>
        <Link to="/rounds" className="nav-link">
          Your Rounds
        </Link>
      </div>
      <span className="welcome">Welcome, {user.name}</span>
      <Link to="" className="logout" onClick={handleLogOut}>
        Log Out
      </Link>
    </nav>
  );
}
