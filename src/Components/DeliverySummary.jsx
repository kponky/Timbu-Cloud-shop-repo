import React from "react";
import "../Styles/deliverySum.css";
import { Link } from "react-router-dom";

const DeliverySummary = () => {
  return (
    <div className="deliverSummary-container">
      <div className="heading">
        <h4>Delivery Summary</h4>
      </div>

      <div className="delivery-card">
        <div className="promo-code">
          <p>Promo Code</p>
        </div>
        <div className="apply">
          <p>Apply</p>
        </div>
      </div>
      <span className="discount">25% of Discount</span>
      <div className="total-details">
        <div>
          <p>Subtotal</p>
          <span>N5000</span>
        </div>
        <div>
          <p>Delivery Fee</p>
          <span>N100</span>
        </div>
        <div>
          <p>Discount</p>
          <span>(25%) -50</span>
        </div>
        <div>
          <p>Tax</p>
          <span>N100</span>
        </div>
      </div>
      <div className="checkout-btn">
        <Link to="/checkout">
          <button className="btn">Proceed to Checkout</button>
        </Link>

        <Link to = "/">
        <button className="btn2">Contiue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default DeliverySummary;
