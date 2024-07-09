import React from "react";
import { Link } from "react-router-dom";
import "../Styles/productCard1.css";
import { formatCurrency } from "../utils/helpers";
import { useCart } from "../context/CartContext";

const ProductCard1 = ({ item }) => {
  const {addToCart} = useCart()

  // const { addToCart } = useCart ();

  return (
    <div className="cards__items">
      <Link to={`/latestproduct/${item.id}`}>
        {item.newlabel && (
          <div className="new-label">
            <span>New</span>
          </div>
        )}
        <div className="card-img">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="item">
          <div className="card-title">
            <h5>{item.title}</h5>
          </div>
          <p>{item.description}</p>
          <div className="price">
            <h6>N{item.price} </h6>
            <span>N{item.slashprice}</span>
          </div>
          <div className="save-price">
            <p> <span>Save  </span>N{item.saveprice}</p>
            <button className="btn2">{item.discount}</button>
            <button className="btn" onClick={() =>addToCart(item, item.id)} >Add to Cart</button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard1;


// <h6> {formatCurrency(item.price, "NGN")} </h6>
// <span>{formatCurrency(item.slashprice, "NGN")}</span>