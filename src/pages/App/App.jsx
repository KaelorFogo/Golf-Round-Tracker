import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import Rounds from "../RoundsPage/RoundsPage";
import NewRoundPage from "../NewRoundPage/NewRoundPage";
import NavBar from "../../components/NavBar/NavBar";
import LandingPage from "../LandingPage/LandingPage";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar className="NavBar" user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/" element={<LandingPage user={user.name}/>} />
            <Route path="/rounds" element={<Rounds />} />
            <Route path="/rounds/new" element={<NewRoundPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
