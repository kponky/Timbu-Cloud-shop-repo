import React from "react";
import logo from "../assets/Black-Brand.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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

const Header2 = () => {
  return (
    <div className="header2-container">
      <div className="header2-a">
        <div className="logo">
          <img src={logo} alt="fashionest" />
        </div>

        <div className="search-input">
          <input
            type="text"
            name="search item"
            placeholder="Search for your items..."
          />
          <FontAwesomeIcon icon={faSearch} />
        </div>

        <div className="login-reg">
          <a href="#">
            <FontAwesomeIcon icon={faUser} />
            <span>Login/Registration</span>
          </a>
        </div>

        <div className="cart">
          <a href="#">
            <FontAwesomeIcon icon={faCartShopping} />
            <span>2</span>
            <p>Cart</p>
          </a>
        </div>
      </div>

      <div className="header2-b">
        <AllCategories />
        <HomeComp />
        <Collection />
        <NewArrivals />
        <WomanWear />
        <MensWear />
        <Brands />

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
