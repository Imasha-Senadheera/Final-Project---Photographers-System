import React from 'react';
import './SignUpForm.css';
import logoImage from '../../assets/logo.png';
import facebookImage from '../../assets/facebook.png';
import googleImage from '../../assets/google.png';
import backgroundImage from '../../assets/background.png'; // Import the background image

function SignUpForm() {
    return (
        <div className="signup-form" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <img alt="logo" className="logo" src={logoImage} />
            <div className="mainTitle">Sign up</div>
            <div className="title">Sign up to</div>
            <div className="subtitle">Graphers</div>
            <div className="pharagraph">If you already have an account<br />You can <b>Login here !</b></div>

            <div className="input-group">
                <div className="input-wrapper">
                    <input type="text" id="email" name="email" placeholder="Enter Email" />
                </div>
            </div>
            <div className="input-group">
                <div className="input-wrapper">
                    <input type="text" id="username" name="username" placeholder="Create Username" />
                </div>
            </div>
            <div className="input-group">
                <div className="input-wrapper">
                    <input type="text" id="contact" name="contact" placeholder="Contact number" />
                </div>
            </div>
            <div className="input-group">
                <div className="input-wrapper">
                    <input type="password" id="password" name="password" placeholder="Password" />
                </div>
            </div>
            <div className="input-group">
                <div className="input-wrapper">
                    <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" />
                    <div className="password-icon">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </div>
            </div>

            <button type="submit">Register</button>

            <div className="continue-with">or continue with</div>

            <div className="social-icons">
                <img src={facebookImage} alt="Facebook" />
                <img src={googleImage} alt="Google" />
            </div>
        </div>
    );
}

export default SignUpForm;
