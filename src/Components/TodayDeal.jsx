import React from "react";
import '../Styles/todaydeal.css'
import image1 from '../assets/multi coloured shirts.png';
import floralgown from '../assets/muti coloured dress.png';
import womanHat from '../assets/lady  with black hat.png'

const TodayDeal = () => {
  return (
    <div className="todayDeal-container">
      <div className="product-heading">
        <h1>Today's Deal</h1>
      </div>

      <div className="deals-cards">
        <div className="deal-item">
       <div className="dealimage">
       <img src= {image1}  alt="" />
       </div>
          <span>Best Offer</span>
          <div className="overlay1">
            <h1>- 35% OFF</h1>
            <h2>N15,000</h2>
            <p>Free Shipping Withing Lagos</p>
          </div>
        </div>
        <div className="deal-card2">
          <div className="deal-item2">
            <img src= {floralgown} alt="" />
            <div className="overlay2">
              <h1>- 45% OFF</h1>
              <h2>N19,000</h2>
              <h3>N50,000</h3>
            </div>
          </div>
          <div className="deal-item3">
          <span className="deal-badge">NEW</span>
          <img src= {womanHat} alt="" />
          <div className="overlay3">
            <h1>- 25% OFF</h1>
            <h2>N15,000</h2>
            <p>
              A Sun Hat is a wide-brimmed hat designed to provide ample shade
              and protection from the sun. It's a stylish and functional
              accessory, perfect for sunny days.
            </p>
          </div>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default TodayDeal;
