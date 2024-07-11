import React, { useState } from "react";
import Header1 from "./Header1";
import HeaderNav from "./HeaderNav";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import carImg from "../assets/car-removebg-preview.png";
import paypalcard from "../assets/paypal-removebg-preview.png";
import CartItem from "./CartItem";
import { useCart } from "../context/CartContext";
import DeliverySum2 from "./DeliverySum2";
import "../Styles/checkout.css"

const Checkout = () => {
  const { cart, clearCart } = useCart();
  return (
    <div>
      <Header1 />
      <HeaderNav />
      <div className="checkout-wrapper">
     <div className="checkout-left">
     <div className="shoppingAddress">
     <div className="checkoutHeader">
       <h4>Shoppping Address</h4>
       <div>
         <button>Edit</button>
       </div>
     </div>
     <p className="order-name">Nelson James | +23407030677747 </p>
     <span>
       1234 Trendy Lane <br />
       Suite 567 | Stylish City Port Harcourt, FS 78901
     </span>
   </div>
   <div className="freeShipping">
     <div className="left">
       <p>Free shipping to your destination on the first order.....</p>
       <img src={carImg} alt="" />
     </div>
     <div className="right">
       <p> Estimated delivery is between 7 - 21 Days</p>
     </div>
   </div>
   <div className="paymentMethods">
     <div>
       <h5>Payment Methods </h5>
     </div>

     <div className="cards">
       <div>
         <input type="radio" /> 
         <FontAwesomeIcon icon={faCreditCard} />
         Add new card
       </div>

       <div>
         <input type="radio" /> <FontAwesomeIcon icon={faCreditCard} />
         <img src={paypalcard} alt="payment card" />
       </div>
     </div>

     <div className="selectanother">
       <p>Select another</p>
       <p>Payment Method</p>
     </div>
   </div>

   <div className="cart-items">
     {cart.map((item, i) => (
       <CartItem key={i} item={item} />
     ))}
   </div>
     </div>

     <div className="checkout-right">
     <DeliverySum2/>
     </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
