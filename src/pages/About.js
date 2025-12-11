import React from 'react'
import '../styles/About.css'
import about from '../assets/about.png'
function About() {
  return (
    <div className="about" style={{backgroundImage:`url(${about})`}}>
      <div className="about-container" >
        <h1>ABOUT US</h1>
        <p>
          Welcome to our store where quality meets care.
          We're a locally owned business passionate about bringing you handpicked products and exceptional service.

          Since opening our doors in Year, we've been committed to creating a shopping experience that feels personal, friendly, and reliable. Whether you're here for mention vapes, were here to help you find exactly what you need.

          Thank you for supporting local. Were so glad youre here.
        </p>
        </div> 
        
    </div>
  )
}

export default About;