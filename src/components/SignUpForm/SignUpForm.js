import React from 'react';
import './SignUpForm.css'; // Import the CSS file for styling
import logoImage from '../../assets/logo.png'; // Import the logo image
import facebookImage from '../../assets/facebook.png'; // Import the Facebook icon image
import googleImage from '../../assets/google.png'; // Import the Google icon image
import backgroundImage from '../../assets/background.png'; // Import the background image

function SignUpForm() {
    return (
        <div className="signup-form" style={{ backgroundImage: `url(${backgroundImage})` }}>
            {/* Logo */}
            <img alt="logo" className="logo" src={logoImage} />

            {/* Main title */}
            <div className="mainTitle">Sign up</div>

            {/* Title */}
            <div className="title">Sign up to</div>

            {/* Subtitle */}
            <div className="subtitle">Graphers</div>

            {/* Paragraph */}
            <div className="pharagraph">If you already have an account<br />You can <b>Login here !</b></div>

            {/* Sign-up Form */}
            <div className="input-group">
                {/* Email input */}
                <label htmlFor="email"></label>
                <input type="text" id="email" name="email" placeholder="Enter Email" />
                <br></br>
                <br></br>

                {/* User name input */}
                <label htmlFor="user-name"></label>
                <input type="text" id="user-name" name="user-name" placeholder="Enter User Name" />
                <br></br>
                <br></br>

                {/* Password input */}
                <label htmlFor="password"></label>
                <input type="password" id="password" name="password" placeholder="Password" />
                <br></br>
                <br></br>

                {/* Confirm password input */}
                <label htmlFor="confirm-password"></label>
                <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm Password" />

                {/* Register button */}
                <button type="submit">Register</button>

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

export default SignUpForm;