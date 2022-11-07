import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LogInForm"
import { useState } from "react";

const AuthPage = ({setUser}) => {
  const [showSignUp, setShowSignUp] = useState(true);
    return (
      <div>
        <h1>AuthPage</h1>
            {showSignUp ? <SignUpForm setUser={setUser} /> : <LoginForm setUser={setUser}/>}

            <button onClick={() => setShowSignUp(!showSignUp)}> 
                {showSignUp ? "Log In" : "Sign Up"}
            </button>
      </div>
    );
  };
  export default AuthPage;




