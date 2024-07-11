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
