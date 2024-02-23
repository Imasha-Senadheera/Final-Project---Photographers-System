import React from 'react';
import './SignInForm.css'; // Importing CSS file
import logoImage from '../../assets/logo.png'; // Importing logo image
import facebookImage from '../../assets/facebook.png'; // Importing Facebook image
import googleImage from '../../assets/google.png'; // Importing Google image
import backgroundImage from '../../assets/background.png'; // Importing background image

function SignInForm() {
  return (
    <div className="signin-form" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* Logo */}
      <img alt="logo" className="logo" src={logoImage} />

      {/* Main title */}
      <div className="mainTitle">Sign in</div>

      {/* Title */}
      <div className="title">Sign in to</div>

      {/* Subtitle */}
      <div className="subtitle">Graphers</div>

      {/* Paragraph */}
      <div className="pharagraph">
        If you don’t have an account register<br></br>
        You can <b>Register here!</b>
      </div>

      {/* Sign-in form */}
            <div className="input-group">
          {/* Email input */}
          <label htmlFor="email"></label>
          <input type="text" id="email" name="email" placeholder="Email or Username" />
          <br></br>
          <br></br>

          {/* Password input */}
          <label htmlFor="password"></label>
          <input type="password" id="password" name="password" placeholder="Password" />

          {/* Forgot password link */}
          <div className="forgot-password">Forgot password?</div>

          {/* Login button */}
          <button type="submit">Login</button>

          {/* Continue with text */}
          <div className="continue-with">or continue with</div>
        </div>
   
      {/* Social icons */}
      <div className="social-icons">
        <img src={facebookImage} alt="Facebook" />
        <img src={googleImage} alt="Google" />
      </div>
    </div>
  );
}

export default SignInForm;
