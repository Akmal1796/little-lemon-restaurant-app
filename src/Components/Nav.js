import React from 'react';
import logo from '../Images/logo 1.jpg';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  return (
    <nav>
        <img src={logo} className='logo' alt='Logo' />
        <ul>
            <li><Link to="/" className='nav-item'>Home Page</Link></li>
            <li><Link to="/about" className='nav-item'>About</Link></li>
            <li><Link to="/reservation" className='nav-item'>Reservation</Link></li>
            <li><Link to="/order" className='nav-item'>Order Online</Link></li>
            <li><Link to="/login" className='nav-item'>Login</Link></li>
        </ul>
    </nav>
  );
}

export default Nav;
