import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from "../Images/logo 8.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (

    <footer className='footer-section'>
      <div>
        <img src={footerLogo} alt='Little Lemon Logo' className='footer-logo' />
      </div>
      <div className='quicklink-container'>
      <h2>Quick Links</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/reservation">Reservations</Link></li>
        <li><Link to="/order">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
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