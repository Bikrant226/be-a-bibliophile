import React from 'react'
import '../styles/header.css';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
    const count=useSelector((state)=>state.cartItems.length)
    console.log(count)
    return (
        <>
        <div className="header">
            <p>be a bibliophile</p> 
            <Link className="link" to='/Signin'>Signin</Link>
            <Link className="link" to='/Signup'>Signup</Link>
            <Link className="link" to="/Cart">
            Cart {count>0 &&<span>{count}</span>}
            </Link>
        </div>
        </>
    )
}

export default Header


