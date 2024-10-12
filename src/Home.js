import React from 'react'
import heroIMG from './Images/recipe 2.jpg';
import GreekSalad from "./Images/recipe 1.jpg";
import Bruchetta from "./Images/recipe 4.jpg";
import LemonDesert from "./Images/LemonDessert.jpg";
import { RiEBike2Fill } from "react-icons/ri";

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
          <img src={heroIMG} alt='hreo-image' className='banner-image'/>
        </div>
      </div>
      <section className='specials'>
        <div className='specials-header'>
          <h1>This Weeks Specials!</h1>
          <button className='online-menu-btn'>Online Menu</button>
        </div>
        <div className='specials-content'>
          <div className='card-container'>
            <div className=''>
              <img src={GreekSalad} className='reciep-img' alt='Greek Salad'/>
            </div>
            <div className='card-title'>
              <p className='reciep-name'>Greek Salad</p>
              <p className='reciep-price'>$12.99</p>
            </div>
            <div className='reciep-description'>
              <p>The famous greek salad of crispy lettuce, peppers, olives and our Chiago style feta chees. garnished with crunchy garlic and roemary croutons.</p>
            </div>
            <div className='order-section'>
              <p>Order a delivery</p>
              <RiEBike2Fill />
            </div>
          </div>
          <div className='card-container'>
            <div className=''>
              <img src={Bruchetta} className='reciep-img' alt='Greek Salad'/>
            </div>
            <div className='card-title'>
              <p className='reciep-name'>Bruchetta</p>
              <p className='reciep-price'>$5.99</p>
            </div>
            <div className='reciep-description'>
              <p>Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
            </div>
            <div className='order-section'>
              <p>Order a delivery</p>
              <RiEBike2Fill />
            </div>
          </div>
          <div className='card-container'>
            <div className=''>
              <img src={LemonDesert} className='reciep-img' alt='Greek Salad'/>
            </div>
            <div className='card-title'>
              <p className='reciep-name'>Lemon Desert</p>
              <p className='reciep-price'>$5.00</p>
            </div>
            <div className='reciep-description'>
              <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as autheentic as can be imagined.</p>
            </div>
            <div className='order-section'>
              <p>Order a delivery</p>
              <RiEBike2Fill />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home