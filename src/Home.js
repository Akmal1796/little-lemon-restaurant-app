import React from 'react'
import heroIMG from './Images/recipe 2.jpg';
import GreekSalad from "./Images/recipe 1.jpg";
import Bruchetta from "./Images/recipe 4.jpg";
import LemonDesert from "./Images/LemonDessert.jpg";
import { RiEBike2Fill } from "react-icons/ri";
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import Profile01 from "./Images/profile 01.jpg";
import Profile02 from "./Images/profile 02.jpg";
import Profile03 from "./Images/profile 03.jpg";
import Profile04 from "./Images/profile 04.jpeg";
import RestauranIMG01 from "./Images/restaurant01.jpg";
import RestauranIMG02 from "./Images/restaurant02.jpg";

const Home = () => {
  return (
    <main className='home-page'>
      <section className='homepage-banner'>
        <div className='banner-text-container'>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>We are a family owned Mediterranean restaurant. Focused on traditional recipes served with a modern twist.</p>
          <button className='reserve-btn'>Reserve a Table</button>
        </div>
        <div className='banner-img-container'>
          <img src={heroIMG} alt='hreo-image' className='banner-image'/>
        </div>
      </section>
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
      <section className='reviews-section'>
        <div className='review-card-container'>
          <div className='review-header'>
            <img src={Profile01} alt='Profile Image' className='profile-img' />
            <p className='review-title-container'>
              <span className='review-name'>Sarah</span>
              <span>Food Enthusiast</span>
            </p>
          </div>
          <p className='review-description'>"A fresh Mediterranean salad with cucumbers, tomatoes, feta, olives, and a tangy olive oil dressing."</p>
          <div className='start-icons'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStarHalfStroke />
          </div>
        </div>
        <div className='review-card-container'>
          <div className='review-header'>
            <img src={Profile02} alt='Profile Image' className='profile-img' />
            <p className='review-title-container'>
              <span className='review-name'>Alicia</span>
              <span>Food Critic</span>
            </p>
          </div>
          <p className='review-description'>"A delicious Italian starter featuring grilled bread topped with fresh tomatoes, garlic, and basil."</p>
          <div className='start-icons'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <div className='review-card-container'>
          <div className='review-header'>
            <img src={Profile03} alt='Profile Image' className='profile-img' />
            <p className='review-title-container'>
              <span className='review-name'>David</span>
              <span>Pastry Chef</span>
            </p>
          </div>
          <p className='review-description'>"A tangy, sweet treat with zesty lemon flavor and creamy texture."</p>
          <div className='start-icons'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <div className='review-card-container'>
          <div className='review-header'>
            <img src={Profile04} alt='Profile Image' className='profile-img' />
            <p className='review-title-container'>
              <span className='review-name'>Mark</span>
              <span>Culinary Expert</span>
            </p>
          </div>
          <p className='review-description'>"A refreshing blend of crisp veggies, tangy feta, and olives, oregano. Perfectly balanced and healthy."</p>
          <div className='start-icons'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
      </section>
      <section className='about-section'>
        <div className='about-section-text-content'>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>We are a family-owned Mediterranean restaurant focused on traditional recipes served with a modern twist. Our menu features fresh, locally sourced ingredients, offering vibrant dishes that celebrate the rich flavors of the Mediterranean. Join us for a memorable dining experience!</p>
        </div>
        <div className='about-section-image-content'>
          <img src={RestauranIMG01} alt='Restaurant Image' className='restaurant-img' />
          <img src={RestauranIMG02} alt='Restaurant Image' className='restaurant-img float-img' />
        </div>
      </section>
    </main>
  )
}

export default Home