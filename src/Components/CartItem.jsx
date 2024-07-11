import { faHeart, faMinus, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useCart } from "../context/CartContext";
import '../Styles/cart.css'

const CartItem = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  const handleIncrement = (id) => {
    increaseQuantity(id);
  };
  const handleDecrement = (id) => {
    decreaseQuantity(id);
  };

  return (
    

    <div className="cart-item">
      <div className="cart-item_image">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="card-item_detail">
      <div className="card__item1">
  <h5>{item.title}</h5>
  <p>
    {item.inStock ? (
      <span>In Stock</span>
    ) : item.soldOut ? (
      <span>Sold Out</span>
    ) : (
      <span>Out of Stock</span> // or a default message
    )}
  </p>
</div>
<div className="desc">
<p>{item.description}</p>
<span> S </span>
<span> XS </span>
<span> L</span>
<span> M </span>
<span> XL </span>
</div>
        <div className="card__item2">
          <div className="quantity-btns">
            <button className="quantity-btn"
              onClick={() => handleDecrement(item.id)}
              disabled={item.quantity < 2}
            >
              <FontAwesomeIcon icon={faPlus} className="icon"/>
            </button>
            <span>{item.quantity}</span>
            <button className="quantity-btn" onClick={() => handleIncrement(item.id)}>
              <FontAwesomeIcon icon={faMinus}  className="icon"/>
            </button>
          </div>

          <div className="price">
          <p>N {item.price} </p>
          <span>N{item.saveprice}</span>
          
          </div>

          <div className="trash">
          <FontAwesomeIcon icon={faHeart} className="heartIcon"/>
          <button
          className="remove-btn"
          onClick={() => removeFromCart(item.id)}
        >
          <FontAwesomeIcon icon={faTrashAlt} className="icon"   />
        </button>
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default CartItem;
