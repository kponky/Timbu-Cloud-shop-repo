import React from "react";
import logo from "../assets/Black-Brand.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faCartShopping,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import AllCategories from "../Pages/AllCategories";
import HomeComp from "./HomeComp";
import Collection from "./Collection";
import NewArrivals from "./NewArrivals";
import WomanWear from "./WomanWear";
import MensWear from "./MensWear";
import Brands from "./Brands";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import "../Styles/header2.css";
import Categories from "./Categories";

const Header2 = () => {
  return (
    <div className="header2-container">
      <div className="header2-a">
        <div className="logo">
          <h1>
            F<span>ashionnest</span>
          </h1>
        </div>

        <div className="leftside">
          <div className="search-input">
            <input
              type="text"
              name="search item"
              placeholder="Search for your items..."
            />
            <button>
              {" "}
              <FontAwesomeIcon icon={faSearch} className="icon" />
            </button>
          </div>

          <div className="login-reg">
            <a href="#">
              <FontAwesomeIcon icon={faUser} />
              <span>Login/Registration</span>
            </a>
          </div>

          <div className="cart">
            <a href="#">
              <FontAwesomeIcon icon={faCartShopping} className="icon" />
              <span className="badge">2</span>
              <p>Cart</p>
            </a>
          </div>
        </div>
      </div>

      <div className="header2-b">
        <Categories />
        <div className="headerList_items">
          <ul className="list-items">
            <li className="listed">Home</li>
            <li className="listed">
              Collection <FontAwesomeIcon icon={faAngleDown} />
            </li>
            <li className="listed">New Arrivals</li>
            <li className="listed">Women's Wears</li>
            <li className="listed">Men's Wears</li>
            <li className="listed">Brands</li>
            <div className="buttons">
            <button>About us</button>
            <button>Contact us</button>
            
            </div>
          </ul>
        </div>

        <div className="about-contactus">
          <button>
            <AboutUs />
          </button>
          <button>
            <ContactUs />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header2;
// <HomeComp />
//         <Collection />
//         <NewArrivals />
//         <WomanWear />
//         <MensWear />
//         <Brands />
