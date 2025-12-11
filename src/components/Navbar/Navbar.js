import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/Navbar.css'
function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <h1>WELCOME!</h1>
        <div className="links">        
        <Link to="/home">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button className="logout">
          <Link to="/">Logout</Link>
        </button>
        </div>       
      </div>
      <div>

      </div>



    </div>
  )
}

export default Navbar;