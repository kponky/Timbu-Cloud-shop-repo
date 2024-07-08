import React from "react";
import { Link } from "react-router-dom";

const FeaProductCard = (props) => {
  const item = props;
  return (
    <div className="featured-card-items">
      <Link to={`/featureproduct/${item.id}`}>
        <div className="f-card">
          <img src={item.image} alt="" />
          <div className="card-title">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>

          <button>Shop Now</button>
        </div>
      </Link>
    </div>
  );
};

export default FeaProductCard;
