import { faTimes } from "@fortawesome/free-solid-svg-icons";
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
import '../Styles/cart.css'
import '../Styles/header1.css'
import '../Styles/header2.css'

const Cart = () => {
  const { cart, total, clearCart } = useCart();
  const [openCart, setOpenCart] = useState(false)
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
              <h3>Shopping Cart</h3> <span>{cart.length}</span>
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
       
        <div>
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

// import React from "react";
// import { useCart } from "../context/CartContext";
// import Header1 from "./Header1";
// import HeaderNav from "./HeaderNav";
// import TodayDeal from "./TodayDeal";
// import Updates from "./Updates";
// import Footer from "./Footer";
// import "../Styles/cart.css";
// import DeliverySummary from "./DeliverySummary";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAnglesUp, faCheck } from "@fortawesome/free-solid-svg-icons";
// import carImg from "../assets/car-removebg-preview.png"

// const Cart = () => {
//   const { cart, removeFromCart } = useCart();

//   return (
//     <>
//       <Header1 />
//       <HeaderNav />
//       <div className="cart-container">
//         <div className="cart-card">
//           <div className="heading">
//           <div className="cart-badge">
//           <h2>Shoping Cart</h2>
//           <span className="badge">2</span>
//           </div>

//             <div className="freeShipping">
//             <div className="left">
//               <p>Free shipping on to your destination at first order..... </p>
//               <img src={carImg} alt="" />
//             </div>
//             <div className="right">
//             <FontAwesomeIcon icon={faCheck} className="icon"/>
//             </div>
//           </div>
//           </div>
//           {cart.length === 0 ? (
//             <p>Your cart is empty.</p>
//           ) : (
//             <ul>
//               {cart.map((item) => (
//                 <div key={item.id} className="cart-item">
//                   <img src={item.image} alt={item.title} />
//                   <div>
//                     <h4>{item.title}</h4>
//                     <p>{item.description}</p>
//                     <p>{item.price}</p>
//                     <button onClick={() => removeFromCart(item.id)}>
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </ul>
//           )}
//         </div>
//         <div>
//           <DeliverySummary />
//         </div>
//       </div>
//       <TodayDeal />
//       <Updates />
//       <Footer />
//     </>
//   );
// };

// export default Cart;
