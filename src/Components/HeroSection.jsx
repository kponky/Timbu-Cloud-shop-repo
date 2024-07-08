import React from "react";
import heroImg from "../assets/image 1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import "../Styles/heroSection.css";
import discountimg from '../assets/discount_726476.png'
import callAgentIMg from '../assets/call-center-worker.png'
import moneyImg from '../assets/noto-v1_money-bag (1).png'
import deliveryVan from '../assets/delivery truck.jpg'


const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-header">
        <>
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="heroText">
              <div className="hero-header-text">
              <h2 className="text-1">Unleash Your Styles </h2>
                <h2>
                  FASHION <p>FOR </p>
                </h2>
                <h2>                
                  EVERY <span> OCCASION</span>
                </h2>
                <span className="heroBadge">NEW</span>
                <button className="btn">SHOP NOW</button>
              </div>
                

                <div className="hero__img">
                  <img src={heroImg} alt="lady in yellow" className="heroimg" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </>
      </div>

     <div className="services-card">
     <div className="heroCards">
     <img src={callAgentIMg} alt="user-icon" />
     <h5>24/7 Support Services</h5>
     <span>we offer Support Any time</span>
   </div>
   <div className="heroCards">
     <img src = {discountimg} alt="discount" />
     <h5>Offers and Discounts</h5>
     <span>Back Returns in 7bworking Days</span>
   </div>
   <div className="heroCards">
     <img src= {moneyImg} alt="money bag" />
     <h5>Money Back Guarantee</h5>
     <span>Gurantee within 30 days</span>
   </div>
   <div className="heroCards">
     <img src= {deliveryVan}alt="deliver-truck" />
     <h5>Worldwide Shipping</h5>
     <span>Order and get it deliver to your door step</span>
   </div>
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
                <h6>
                  N7,000.00 <span>N12,000.00</span>
                </h6>
              </div>
              <div className="save">
                <p>Save N5,000</p>
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
                <h6>
                  N7,000.00 <span>N12,000.00</span>
                </h6>
              </div>
              <div className="save">
                <p>Save N5,000</p>
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
                <h6>
                  N7,000.00 <span>N12,000.00</span>
                </h6>
              </div>
              <div className="save">
                <p>Save N5,000</p>
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
                <h6>
                  N7,000.00 <span>N12,000.00</span>
                </h6>
              </div>
              <div className="save">
                <p>Save N5,000</p>
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
                <h6>
                  N7,000.00 <span>N12,000.00</span>
                </h6>
              </div>
              <div className="save">
                <p>Save N5,000</p>
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
                <h6>
                  N7,000.00 <span>N12,000.00</span>
                </h6>
              </div>
              <div className="save">
                <p>Save N5,000</p>
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
