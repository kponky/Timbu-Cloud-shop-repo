import React from "react";

const TodayDeal = () => {
  return (
    <div className="todaydeal-container">
      <div className="product-heading">
        <h1>Our Featured Products</h1>
      </div>

      <div className="deals-card">
        <div>
          <img src="" alt="" />
          <span>Best Offer</span>
          <div className="overlay">
            <h1>- 35% OFF</h1>
            <h2>N15,000</h2>
            <p>Free Shipping Withing Lagos</p>
          </div>
        </div>
        <div>
          <div>
            <img src="" alt="" />
            <div className="overlay">
              <h1>- 45% OFF</h1>
              <h2>N19,000</h2>
              <h3>N50,000</h3>
            </div>
          </div>
          <img src="" alt="" />
          <div className="overlay">
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
  );
};

export default TodayDeal;
