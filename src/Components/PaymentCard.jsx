import React from "react";
import "../Styles/paymentCard.css";
import verve from "../assets/verve-removebg-preview.png";
import mastercard from "../assets/master_card-removebg-preview.png";
import cirruscard from "../assets/cirrus_card-removebg-preview.png";
import paypalcard from "../assets/paypal-removebg-preview.png";
import lockimg from "../assets/lock.png";
import "../Styles/paymentCard.css";
const PaymentCard = () => {
  return (
    <div className="cardCheckout">
      <h5>We Accept </h5>
      <div className="cards">
        <div>
          <img src={mastercard} alt="master card" />
        </div>
        <div>
          <img src={paypalcard} alt="payment card" />
        </div>
        <div>
          <img src={verve} alt="verve card" />
        </div>
        <div>
          <img src={cirruscard} alt="cirrus card" />
        </div>
      </div>
      <div className="securepayment">
        <div className="secure-header">
          <h5>Secure Payment</h5>
          <div className="lock">
            <img src={lockimg} alt="lock" />
          </div>
          </div>
          <p>
            Your payment information is protected with industry-leading security
            measures.
          </p>
       
      </div>
    </div>
  );
};

export default PaymentCard;
