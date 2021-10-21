import React from 'react';
import '../styles/signin.css';
import {Link} from 'react-router-dom';
function Signin() {
    return (
        <div className="signin-wrapper">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
            <Link to="/Signup" id="link">New User?Please signup here</Link>
        </div>
    )
}

export default Signin