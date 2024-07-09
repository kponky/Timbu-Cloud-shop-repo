import React from "react";

const DeliverySummary = () => {
  return (
    <div className="deliverSummary-container">
      <div className="heading">
        <h1>Delivery Summary</h1>
      </div>

      <div className="delivery-card">
        <div className="promo-code">
          <p>Promo Code</p>
        </div>
        <div className="apply">
          <p>Apply</p>
        </div>
      </div>
      <span>25% of Discount</span>
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
      <button>Proceed to Checkout</button>
      <button>Contiue Shopping</button>
      </div>
    </div>
  );
};

export default DeliverySummary;
