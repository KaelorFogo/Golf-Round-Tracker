import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main className="auth-page">
      <button onClick={() => setShowSignUp(!showSignUp)}>
        {showSignUp ? "Log In" : "Sign Up"}
      </button>
      {showSignUp ? (
        <>
          <p>Sign up now to start tracking your golf rounds!</p>
          <SignUpForm setUser={setUser} />
        </>
      ) : (
        <>
          <p>Already have an account? Log in below:</p>
          <LoginForm setUser={setUser} />
        </>
      )}
    </main>
  );
}
