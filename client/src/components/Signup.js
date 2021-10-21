import React from 'react'
import '../styles/signup.css';
import {Link} from 'react-router-dom';
function Signup() {
    return (
        <div className="signup-wrapper">
            <input type="text" placeholder="Username" name="username"/>
            <input type="email" placeholder="Email" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <button>Signup</button>
            <Link to="/Signin" id="link">Already have an account?Please login here</Link>
        </div>
    )
}

export default Signup