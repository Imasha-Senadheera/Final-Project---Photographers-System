// SignInForm.js

import React from 'react';
import './SignInForm.css';
import logoImage from '../../assets/logo.png';
import facebookImage from '../../assets/facebook.png';
import googleImage from '../../assets/google.png';
import backgroundImage from '../../assets/background.png';

function SignInForm() {
  return (
    <div className="signin-form"style={{ backgroundImage: `url(${backgroundImage})` }}>
      <img alt="logo" className="logo" src={logoImage} />
      <div className="mainTitle">Sign in</div>
      <div className="title">Sign in to</div>
      <div className="subtitle">Graphers</div>
      <div className="pharagraph">If you don’t have an account register<br></br>You can <b>Register here!</b></div>

      <form>
        <div className="input-group">
          <label htmlFor="email"></label>
          <input type="text" id="email" name="email" placeholder="Email or Username" />
          <br></br>
          <br></br>
          <label htmlFor="password"></label>
          <input type="password" id="password" name="password" placeholder="Password" />
          <div className="forgot-password">Forgot password?</div>
          <button type="submit">Login</button>
          <div className="continue-with">or continue with</div>
        </div>
      </form>

      <div className="social-icons">
        <img src={facebookImage} alt="Facebook" />
        <img src={googleImage} alt="Google" />
      </div>
    </div>

  );
}

export default SignInForm;
