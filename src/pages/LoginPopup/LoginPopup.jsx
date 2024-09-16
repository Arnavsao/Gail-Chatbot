/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './LoginPopup.css';

function LoginPopup({ setShowLogin }) {
  const [cursorState, setCursorState] = useState("Login"); // State toggles between "Login" and "Sign Up"

  const handleLogin = () => {
    // Handle login logic here if needed
    setShowLogin(false); // Close the login popup and show the Chatbot
  };

  return (
    <div className='login-popup'>
      <div className="login-popup-container">
        <div className="login-popup-title">
          <h2>{cursorState}</h2>
          <span 
            onClick={() => setShowLogin(false)} 
            className="login-popup-close"
          >
            X
          </span>
        </div>
        <div className="login-popup-inputs">
          {cursorState === "Sign Up" && <input type="text" placeholder='Your name' required />}
          <input type="email" placeholder='Your email' required />
          <input type="password" placeholder='Password' required />
        </div>
        <button onClick={handleLogin}>
          {cursorState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        <div>
          {cursorState === "Login"
            ? <p>Don't have an account? <span onClick={() => setCursorState("Sign Up")}>Sign Up</span></p>
            : <p>Already have an account? <span onClick={() => setCursorState("Login")}>Login here</span></p>
          }
        </div>
      </div>
    </div>
  );
}

export default LoginPopup;