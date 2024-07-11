import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import CartItem from "./CartItem";
import { useCart } from "../context/CartContext";
import Header1 from "./Header1";
import HeaderNav from "./HeaderNav";
import TodayDeal from "./TodayDeal";
import Updates from "./Updates";
import Footer from "./Footer";
import DeliverySummary from "./DeliverySummary";
import carImg from "../assets/car-removebg-preview.png";
import "../Styles/cart.css";
import PaymentCard from "./PaymentCard";

const Cart = () => {
  const { cart, clearCart } = useCart();
  const [openCart, setOpenCart] = useState(false);

  return (
    <>
      <Header1 openCart={openCart} setOpenCart={setOpenCart} />
      <HeaderNav />
      <div className="cart">
        <div className="cart-item-con">
          <div className="cart-card">
            {cart.length < 1 ? (
              <div className="cart-empty">
                <h3>Cart empty</h3>
              </div>
            ) : (
              <>
                <div className="cart-card-header">
                  <div className="item-count">
                    <h2>Shopping Cart</h2>
                    <span>{cart.length}</span>
                  </div>
                  <div className="btn-close">
                    <button onClick={clearCart} className="btn">
                      Clear
                    </button>
                    <button onClick={() => setOpenCart(false)}>
                      <FontAwesomeIcon icon={faTimes} className="icon" />
                    </button>
                  </div>
                </div>
                <div className="freeShipping">
                  <div className="left">
                    <p>
                      Free shipping to your destination on the first order.....
                    </p>
                    <img src={carImg} alt="Free Shipping" />
                  </div>
                  <div className="right">
                    <FontAwesomeIcon icon={faCheck} className="icon" />
                  </div>
                </div>
                <div className="cart-items">
                  {cart.map((item, i) => (
                    <CartItem key={i} item={item} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        <div className="right-sum">
          <div className="summary">
            <DeliverySummary />
          </div>
          <div className="payment-cards">
            <PaymentCard />
          </div>
        </div>
      </div>
      <TodayDeal />
      <Updates />
      <Footer />
    </>
  );
};

export default Cart;
