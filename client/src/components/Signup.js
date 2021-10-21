import React,{useState} from 'react'
import '../styles/signup.css';
import {Link,Redirect} from 'react-router-dom';
import axios from  'axios';
function Signup() {
    const [user,setUser]=useState({});
    const [error,setError]=useState('');
    const [status,setStatus]=useState(0);


    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3001/Signup',user)
            .then(res=>setStatus(res.status))
            .catch(err=>setError(err.response.data))
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
            {error!=='' && <p>{error}</p>}
            <Link to="/Signin" id="link">Already have an account?Please login here</Link> 
            {
                status===200 && <Redirect to="/"/>
            }
        </form>
    )
}

export default Signup