import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import Rounds from "../Rounds/Rounds";
import OrderHistoryPage from "../NewRound/NewRound";
import NavBar from "../../components/NavBar/NavBar";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar className="NavBar" user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/rounds" element={<Rounds />} />
            <Route path="/rounds/new" element={<OrderHistoryPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
