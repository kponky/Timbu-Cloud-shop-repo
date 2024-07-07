import React from "react";
import heroImg from "../assets/image 1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="heroText">
        <h2>
          Unleash Your Styles
          <span>FASHION</span>
          <p>FOR EVERY</p>
          <span>OCCASION</span>
        </h2>
        <span>NEW</span>

        <BUtton>SHOP NOW</BUtton>
      </div>

      <div className="hero-img">
        <img src={heroImg} alt="lady in yellow" />
      </div>

      <div className="heroCards">
        <img src="" alt="" />
        <p>24/7 Support Services</p>
        <span>we offer Support Any time</span>
      </div>
      <div className="heroCards">
        <img src="" alt="" />
        <p>Offers and Discounts</p>
        <span>Back Returns in 7bworking Days</span>
      </div>
      <div className="heroCards">
        <img src="" alt="" />
        <p>MOney Back Guarantee</p>
        <span>Gurantee within 30 days</span>
      </div>
      <div className="heroCards">
        <img src="" alt="" />
        <p>Worldwide Shipping</p>
        <span>Order and get it deliver to your door step</span>
      </div>

      <div className="latestProducts">
        <div className="product-icons">
          <h2>Our Latest roducts</h2>

          <div className="icons">
            <FontAwesomeIcon icon={faAngleRight} />
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>
      <div className="products-cards">
    
          <div className="products-card">
            <img src="" alt="" />
            <h6>Classic Black Tshirt</h6>
            <p>
              A versatile and timeless piece made from 100% organic cotton.
              Perfect for layering or wearing on its own.
            </p>
            <div className="price">
            <h6>N7,000.00 <span>N12,000.00</span></h6>
            </div>
            <div className="save">
            <p>Save   N5,000</p> 
            <button>-2%</button>
            </div>
            
          </div>
          <div className="products-card">
            <img src="" alt="" />
            <h6>Classic Black Tshirt</h6>
            <p>
              A versatile and timeless piece made from 100% organic cotton.
              Perfect for layering or wearing on its own.
            </p>
            <div className="price">
            <h6>N7,000.00 <span>N12,000.00</span></h6>
            </div>
            <div className="save">
            <p>Save   N5,000</p> 
            <button>-2%</button>
            </div>
            
          </div>
          <div className="products-card">
            <img src="" alt="" />
            <h6>Classic Black Tshirt</h6>
            <p>
              A versatile and timeless piece made from 100% organic cotton.
              Perfect for layering or wearing on its own.
            </p>
            <div className="price">
            <h6>N7,000.00 <span>N12,000.00</span></h6>
            </div>
            <div className="save">
            <p>Save   N5,000</p> 
            <button>-2%</button>
            </div>
            
          </div>
          <div className="products-card">
            <img src="" alt="" />
            <h6>Classic Black Tshirt</h6>
            <p>
              A versatile and timeless piece made from 100% organic cotton.
              Perfect for layering or wearing on its own.
            </p>
            <div className="price">
            <h6>N7,000.00 <span>N12,000.00</span></h6>
            </div>
            <div className="save">
            <p>Save   N5,000</p> 
            <button>-2%</button>
            </div>
            
          </div>
          <div className="products-card">
            <img src="" alt="" />
            <h6>Classic Black Tshirt</h6>
            <p>
              A versatile and timeless piece made from 100% organic cotton.
              Perfect for layering or wearing on its own.
            </p>
            <div className="price">
            <h6>N7,000.00 <span>N12,000.00</span></h6>
            </div>
            <div className="save">
            <p>Save   N5,000</p> 
            <button>-2%</button>
            </div>
            
          </div>
          <div className="products-card">
            <img src="" alt="" />
            <h6>Classic Black Tshirt</h6>
            <p>
              A versatile and timeless piece made from 100% organic cotton.
              Perfect for layering or wearing on its own.
            </p>
            <div className="price">
            <h6>N7,000.00 <span>N12,000.00</span></h6>
            </div>
            <div className="save">
            <p>Save   N5,000</p> 
            <button>-2%</button>
            </div>
            
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
