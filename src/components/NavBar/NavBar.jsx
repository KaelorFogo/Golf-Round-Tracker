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
      <Link to="/rounds/new" class="nav-link">
        New Round
      </Link>
      <span class="separator">|</span>
      <Link to="/rounds" class="nav-link">
        Your Rounds
      </Link>
      <span class="welcome">Welcome, {user.name}</span>
      <Link to="" class="logout" onClick={handleLogOut}>
        Log Out
      </Link>
    </nav>
  );
}
