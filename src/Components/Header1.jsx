import {
  faAngleDown,
  faAngleRight,
  faBars,
  faBolt,
  faCarSide,
  faCartShopping,
  faEnvelopeOpen,
  faEnvelopeSquare,
  faGlobe,
  faPersonWalking,
  faShoppingCart,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import supportImg from "../assets/call-center-worker_30415.png";
import offerImg from "../assets/offer icon.png";
import '../Styles/header1.css'
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header1 = ({openCart, setOpenCart}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {cart} = useCart()

  const toggleMenu = () =>{
    setMenuOpen(!menuOpen)
  }
  return (
    <>
      <nav className="top-nav">
        <div className="menubar" onClick={toggleMenu}>
          <FontAwesomeIcon icon= { menuOpen ? faTimes : faBars} className="icon"  />

          <div className="logo">
          <h1>
            F<span>ashionnest</span>
          </h1>
        </div>
        </div>

        <div className="carts">
        <FontAwesomeIcon icon={faUser} className="icon"  />
        <div className="iconn">
        <button onClick={() => setOpenCart(!openCart)}>
        <FontAwesomeIcon icon={faCartShopping} className="icon" />
        {cart.length > 0 && <span className="badge">{cart.length}</span>}
        </button>
        </div>
      </div>
      </nav>

      <div className={`header1-container ${menuOpen ? "active" : ""}`}>
        <div className="header-items supportCenter">
          <img src={supportImg} alt="support adent" />
          <p>Support Center</p>
          <FontAwesomeIcon icon={faAngleRight} className="icon1" />
        </div>

        <div className="yellow-line"></div>

        <div className="header-items">
          <FontAwesomeIcon icon={faPersonWalking} />
          <p>Find Store</p>
        </div>

        <div className="header-items">
          <i className="fa fa-envelope-o" aria-hidden="true"></i>
          {/*<FontAwesomeIcon icon="fa-light fa-envelope" />*/}
          <FontAwesomeIcon icon={faEnvelope} />
          <p>Sales@fashionnest.com</p>
        </div>

        <div className="header-items">
          <img src={offerImg} alt="" />
          <p>Offers & Values</p>
        </div>
        <div className="header-items">
          <FontAwesomeIcon icon={faBolt} />
          <p>Everyday sales</p>
        </div>

        <div className="header-item">
          <FontAwesomeIcon icon={faCarSide} />
          <p>.....Free International Delivery </p>
        </div>

        <div className="header-items">
          <FontAwesomeIcon icon={faGlobe} />
          <p>English </p>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
      </div>
    </>
  );
};

export default Header1;
