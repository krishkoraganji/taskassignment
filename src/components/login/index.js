import React, { useState,useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './index.css'
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
const [error,setError]=useState('')
const navigation=useNavigate()
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const token=Cookies.get('jwtToken')

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  

  const baseUrl='http://65.2.51.31:9001'
  const handleLogin = async (e) => {
    e.preventDefault();
    // You can add your login logic here, such as sending data to a server for authentication.
    // For this example, we'll just print the username and password to the console.
 
        const response = await axios.post(`${baseUrl}/login/`, {username,password});
        if (response.data.status===200){
        const token=response.data.token
        Cookies.set('jwtToken',token)
        navigation('/')
        }else{
            setError(response.data.message)
        }
  };
if (token!==undefined){
    navigation('/')
}
  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Login</button>
      </form>

      <button onClick={()=>{navigation('/signup')}}>Create Account</button>
      <h1>{error&& error}</h1>
    </div>
  );
  
};

export default Login;
