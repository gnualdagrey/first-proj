import React from 'react'
import '../styles/Home.css'
import banner from '../assets/banner.png'
import {Link} from 'react-router-dom'
function Home() {
  return (
    <div className="home" style={{backgroundImage:`url(${banner})`}}>
      <div className="headerContainer" >
        <h1>VAPERS</h1>
        <p> Smoke what you want!</p>
        <Link to="/menu">
        <button>SHOP NOW</button>
        </Link>
      </div>
    </div>
  )
}

export default Home;