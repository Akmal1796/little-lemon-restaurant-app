import React from 'react'
import footerLogo from "../Images/logo 8.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (

    <footer className='footer-section'>
      <div>
        <img src={footerLogo} alt='Little Lemon Logo' className='footer-logo' />
      </div>
      <div className='quicklink-container'>
        <h2>Quik Links</h2>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Menu</a></li>
          <li><a href='#'>Reservations</a></li>
          <li><a href='#'>Order Online</a></li>
          <li><a href='#'>Login</a></li>
        </ul>
      </div>
      <div className='contact-detail-container'>
        <h2>Contact</h2>
        <ul>
          <li>Admin</li>
          <li>Phone Number</li>
          <li>Email</li>
        </ul>
      </div>
      <div className='social-link-container'>
        <h2>Social Media Links</h2>
        <ul>
          <li><a href='facebook.com'><FaFacebook color='blue' /></a></li>
          <li><a href='instagram.com'><FaInstagram color='red' /></a></li>
          <li><a href='twitter.com'><FaTwitter color='#1DA1F2' /></a></li>
        </ul>
      </div>
  </footer>
  )
}

export default Footer