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
                <label htmlFor="email"></label>
                <input type="text" id="email" name="email" placeholder="Enter Email" />
                <br></br>
                <br></br>
                <label htmlFor="user-name"></label>
                <input type="user-name" id="user-name" name="user-name" placeholder="Enter User Name" />
                <br></br>
                <br></br>
                <label htmlFor="password"></label>
                <input type="password" id="password" name="password" placeholder="Password" />
                <br></br>
                <br></br>
                <label htmlFor="confirm-password"></label>
                <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm Password" />
                <button type="submit">Register</button>
                <div className="continue-with">or continue with</div>
            </div>

            <div className="social-icons">
                <img src={facebookImage} alt="Facebook" />
                <img src={googleImage} alt="Google" />
            </div>
        </div>
    );
}

export default SignUpForm;
