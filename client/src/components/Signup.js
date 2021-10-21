import React,{useState} from 'react'
import '../styles/signup.css';
import {Link} from 'react-router-dom';
import axios from  'axios';
function Signup() {
    const [user,setUser]=useState({});


    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3001/Signup',user)
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err.response.message))
    }

    const handleChange=(e)=>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
    
    
    return (
        <form className="signup-wrapper" onSubmit={handleSubmit}>
            <input type="text" 
                placeholder="Username" 
                name="username" 
                onChange={handleChange}
            />
            <input type="email" 
                placeholder="Email" 
                name="email"  
                onChange={handleChange}
            />
            <input type="password" 
                placeholder="Password" 
                name="password" 
                onChange={handleChange} 
            />
            <button type="submit">Signup</button>
            <Link to="/Signin" id="link">Already have an account?Please login here</Link>
        </form>
    )
}

export default Signup