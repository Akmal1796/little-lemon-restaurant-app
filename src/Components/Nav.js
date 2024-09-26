import React from 'react'
import logo from '..//Images/logo 1.jpg'
import { Routes, Route, Link } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Reservation from '../Reservation';
import OrderOnline from '../OrderOnline';
import Login from '../Login';

const Nav = () => {
  return (
    <nav>
        <img src={logo} className='logo'/>
        <ul>
            <li><Link to="/" className='nav-item'>Home Page</Link></li>
            <li><Link to="/about" className='nav-item'>About</Link></li>
            <li><Link to="/reservation" className='nav-item'>Reservation</Link></li>
            <li><Link to="/order" className='nav-item'>Order Online</Link></li>
            <li><Link to="/login" className='nav-item'>Login</Link></li>
        </ul>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/reservation' element={<Reservation />} />
            <Route path='/order' element={<OrderOnline />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    </nav>
  )
}

export default Nav