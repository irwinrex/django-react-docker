// App.js

import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Assuming you have a CSS file for styling
import success from './success.png';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showImage, setShowImage] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSignIn = async () => {
    try {
      console.log(username, password);
      // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint, localhost can be changed based on your configuration
      const response = await axios.post('http://127.0.0.1/home/', {
        username,
        password,
      });
      // Assume the API response indicates successful login
      console.log(response.data)
      if (response.data) {
        setShowImage(true);
      } else { debugger
        console.log('Login failed');
        setIsError(true);
      }
    } catch (error) { debugger
      console.error('Login failed:', error.message);
      setIsError(true);
    }
  };

  return (
    <div className="container">
      {showImage ? (
        <img
          src={success}
          alt="Success Image"
          className="success-image"
        />
      ) : (
        <div className="card">
          <form>
            <h1>Login Page</h1>
            {isError && <span style={{color:'red',fontSize:'12px', marginLeft:'60px'} }>
              invalid username or password 
            </span>}
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a className="button" href="#" onClick={handleSignIn}>
              Login
            </a>
            <p>
              <input className="check" type="checkbox" />
              Remember me
              <a className="forget" href="#">
                Forgot account?
              </a>
            </p>
            <h5>
              Create account?
              <a href="#"> Create</a>
            </h5>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
