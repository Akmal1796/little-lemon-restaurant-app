import React from 'react';
import RestauranIMG01 from "./Images/restaurant01.avif";
import RestauranIMG02 from "./Images/restaurant02.avif";
import RestauranIMG03 from "./Images/restaurant01.jpeg";
import RestauranIMG04 from "./Images/restaurant02.jpeg";

const About = () => {
  return (
    <section className='about-page'>
      <div className='first-base'>
        <div className='about-section-text-content'>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>We are a family-owned Mediterranean restaurant focused on traditional recipes served with a modern twist. Our menu features fresh, locally sourced ingredients, offering vibrant dishes that celebrate the rich flavors of the Mediterranean. Join us for a memorable dining experience!</p>
        </div>
        <div className='about-section-image-content'>
          <img src={RestauranIMG01} alt='Restaurant Image' className='restaurant-img' />
          <img src={RestauranIMG02} alt='Restaurant Image' className='restaurant-img float-img' />
        </div>
      </div>
      <div className='second-base'>
        <div className='about-section-image-content'>
          <img src={RestauranIMG03} alt='Restaurant Image' className='restaurant-img' />
          <img src={RestauranIMG04} alt='Restaurant Image' className='restaurant-img float-img' />
        </div>
        <div className='about-section-text-content'>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>We are a family-owned Mediterranean restaurant focused on traditional recipes served with a modern twist. Our menu features fresh, locally sourced ingredients, offering vibrant dishes that celebrate the rich flavors of the Mediterranean. Join us for a memorable dining experience!</p>
        </div>
      </div>
    </section>
  )
}

export default About