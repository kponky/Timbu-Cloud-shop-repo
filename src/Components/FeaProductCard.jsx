import React from "react";
import { Link } from "react-router-dom";
import "../Styles/featureProductCard.css";
import Updates from "./Updates";
import Footer from "./Footer";
import Header1 from "./Header1";

const FeaProductCard = (props) => {
  const item = props;
  return (
    <div className="featured-card-items">
      <Link to={`/featureproduct/${item.id}`}>
        <div className="f-card">
          <img src={item.image} alt="" />
          <div className="card-title">
            <h5>{item.title}</h5>
            <p>{item.description}</p>
          </div>
          <div className="featureProduct-btn">
            <button>Shop Now</button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FeaProductCard;
