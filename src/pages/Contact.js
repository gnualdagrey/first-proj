import React from 'react'
import '../styles/Contact.css'
import contact from '../assets/contact.png'
function Contact() {
  return (
    <div className="contact" style={{backgroundImage:`url(${contact})`}}>
      <div className="rightside">
        <h1>CONTACT US</h1>
        <form id="contact-form" method='POST'>
          <label htmlFor="name" required>Full Name</label>
          <input id="name" type="text" placeholder="Enter your full name" autoComplete="name"/>
          <label htmlFor="email" required>Email</label>
          <input id="email" type="email" placeholder="Enter your email" autoComplete="email" />
          <label htmlFor="message">Message</label>
          <textarea 
          rows="6"
          placeholder="Enter a message..."
          id="message"
          required
          ></textarea>
          <button type="submit">
          Send your Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact