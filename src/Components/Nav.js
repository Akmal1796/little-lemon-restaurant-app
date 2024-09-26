import React from 'react'
import logo from '..//Images/logo 1.jpg'

const Nav = () => {
  return (
    <nav>
        <img src={logo} />
        <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#reserv'>Reservations</a></li>
            <li><a href='#order'>Order online</a></li>
            <li><a href='login'>Login</a></li>
        </ul>
    </nav>
  )
}

export default Nav