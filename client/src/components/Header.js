import React from 'react'
import '../styles/header.css';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <p>be a bibliophile</p> 
            <Link className="link" to='/Signin'>Signin</Link>
            <Link className="link" to='/Signup'>Signup</Link>
            <Link className="link" to="/Cart">Cart</Link>
        </div>
    )
}

export default Header


