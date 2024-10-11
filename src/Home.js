import React from 'react'
import heroIMG from './Images/recipe 2.jpg';

const Home = () => {
  return (
    <main className='home-page'>
      <div className='homepage-banner'>
        <div className='banner-text-container'>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>We are a family owned Mediterranean restaurant. Focused on traditional recipes served with a modern twist.</p>
          <button className='reserve-btn'>Reserve a Table</button>
        </div>
        <div className='banner-img-container'>
          <img src={heroIMG} className='banner-image'/>
        </div>
      </div>
    </main>
  )
}

export default Home