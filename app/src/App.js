// Login.js

import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint , localhost is can be changed with whatever you deside
      const response = await axios.post('http://foo.bar.com/home/', {
        username,
        password,
      });

      // Handle the response (e.g., redirect, set authentication token, etc.)
      console.log('Login successful:', response.data);
    } catch (error) {
      // Handle login failure (e.g., show an error message)
      console.error('Login failed:', error.message);
    }
  };

  const handleForgotPassword = () => {
    // Implement the logic for the "Forgot Password" functionality
    console.log('Forgot Password clicked');
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleSignIn}>Sign In</button>
      <div>
        <a href="#!" onClick={handleForgotPassword}>
          Forgot Password
        </a>
      </div>
    </div>
  );
};

export default Login;
