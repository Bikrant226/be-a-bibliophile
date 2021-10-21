import React,{useState} from 'react';
import '../styles/signin.css';
import {Link} from 'react-router-dom';
import axios from  'axios';
import {Redirect} from 'react-router-dom';
function Signin() {
    const [user,setUser]=useState({});
    const [status,setStatus]=useState(0);
    const [error,setError]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3001/Signin',user)
            .then(res=>{
                console.log('From then'+res.data)
                setStatus(res.status)
            })
            .catch(err=>{
                console.log('From catch:'+err.response.data)
                setError(err.response.data)
            })
    }

    console.log(error)
    console.log('status is',status)
    const handleChange=(e)=>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
    return (
        <form className="signin-wrapper" onSubmit={handleSubmit}>
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
            <button type="submit">Login</button>
            {error!=='' && <p>{error}</p>}
            <Link to="/Signup" id="link">New User?Please signup here</Link>
            {
                status===200 && <Redirect to="/"/>
            }
        </form>
    )
}

export default Signin