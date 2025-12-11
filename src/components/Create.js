import React from 'react'
import {Link} from 'react-router-dom'
function Create() {
  return (
   <div className="login-container">
      <div className="login-box">
        <h2>Create Your Account</h2>
    <form>
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
    </form>
       
        <Link to="/">
        <button>
          Create Account
        </button>
        </Link>

      </div>
  </div>
  )
}

export default Create;