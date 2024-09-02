import React from "react";
import "./SignUpForm.css"; 
import logoImage from "../../assets/logo.png"; 
import facebookImage from "../../assets/facebook.png"; 
import googleImage from "../../assets/google.png"; 

function SignUpForm() {
  return (
    <div className="signup-container">
      <div className="left-section">
        <img alt="logo" className="logo" src={logoImage} />
        <div className="text-content">
          <h1>Sign up to</h1>
          <h2>Graphers</h2>
          <p>
            If you already have an account
            <br />
            You can{" "}
            <button
              className="login-button"
              onClick={() => alert("Redirect to login page")}
            >
              Login here!
            </button>
          </p>
        </div>
      </div>
      <div className="right-section">
        <h1>Sign Up</h1>
        <form className="signup-form">
          <input type="email" placeholder="Enter Email" />
          <input type="text" placeholder="Create User name" />
          <input type="tel" placeholder="Contact number" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button type="submit">Register</button>
        </form>
        <div className="social-login">
          <p>or continue with</p>
          <div className="social-icons">
            <img src={facebookImage} alt="Facebook" />
            <img src={googleImage} alt="Google" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
