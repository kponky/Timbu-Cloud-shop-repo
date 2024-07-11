import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

const Cart = () => {
  const { cart, total, clearCart } = useCart();
  const [openCart, setOpenCart] = useState(false);
  // const navigate = useNavigate();

  return (
    <>
      <Header1 />
      <HeaderNav />
      <div className="cart">
        <div className="cart-item-con">
          <div className="cart-card">
            {cart?.length < 1 ? (
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
                    <button onClick={() => clearCart()} className="btn">
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
                      Free shipping on to your destination at first order.....{" "}
                    </p>
                    <img src={carImg} alt="" />
                  </div>
                  <div className="right">
                    <FontAwesomeIcon icon={faCheck} className="icon" />
                  </div>
                </div>
                <div className="cart-items">
                  {cart.length < 1 ? (
                    <div>
                      <h4>Cart empty</h4>
                    </div>
                  ) : (
                    cart.map((item, i) => <CartItem key={i} item={item} />)
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="right-sum">
          <DeliverySummary />
        </div>
      </div>

      <TodayDeal />
      <Updates />
      <Footer />
    </>
  );
};

export default Cart;
