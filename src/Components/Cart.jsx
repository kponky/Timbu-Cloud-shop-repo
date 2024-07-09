import React from "react";
import { useCart } from "../context/CartContext";
import Header1 from "./Header1";
import HeaderNav from "./HeaderNav";
import TodayDeal from "./TodayDeal";
import Updates from "./Updates";
import Footer from "./Footer";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <>
      <Header1 />
      <HeaderNav />
      <div className="cart-container">
       <div className="heading">
       <h2>Shoping Cart</h2>
       <span className="badge">2</span>
       </div>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <p>{item.price}</p>
                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <TodayDeal />
      <Updates />
      <Footer />
    </>
  );
};

export default Cart;
