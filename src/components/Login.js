import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Login.css'
  function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome!</h2>

        <input 
          id="name"
          type="text"
          placeholder="Enter your username"
          autoComplete="name"
          required
        />

        <input 
          id="password"
          type="password"
          placeholder="Enter your password"
          autoComplete="password"
          required
        />

        <Link to="/home">
          <button className="login-btn">Login</button>
        </Link>

      <Link to="/create">
          <p>Create Account</p>
      </Link>
      </div>
    </div>
  );
}

export default Login;
