import React from "react";
import "../Styles/cardInfo.css";
import CardHeader from "./CardHeader";
import verveimg from "../assets/verve-removebg-preview.png";
import masterCard from "../assets/master_card-removebg-preview.png";
import cirrusImg from "../assets/cirrus_card-removebg-preview.png";
import paypal from "../assets/paypal-removebg-preview.png";
import lockimg from "../assets/lock.png";
import visa from "../assets/visa_196578.png";

const CardInfo = () => {
  return (
    <div>
      <CardHeader />
      <div className="cardInfo-wrapper">
        <div className="cardInfo-header">
          <h1>Billing Information </h1>
          <div className="cards">
            <img src={masterCard} alt="" />
            <img src={verveimg} alt="" />
            <img src={paypal} alt="" />
            <img src={visa} alt="" />
          </div>
        </div>
        <div className="cardInfo-inputs">
          <div className="input-control">
            <input type="text" placeholder="Cardholder name" />
          </div>
          <div className="input-control">
            <input type="number" placeholder="Cardholder Number" />
          </div>
          <div className="mm-yy">
            <div className="mm">
              <input type="text" placeholder="MM" />
            </div>
            <div className="yy">
              <input type="text" placeholder="YY" />
            </div>
          </div>
          <div className="input-control cc-i23">
            <input type="text" placeholder="CC" />
            <button className="btn1">123</button>
          </div>
          <div className="txt-radio_btn">
            <p>Pleack the box if you will like us to save your card details</p>
            <div className="radiobtn">
              <input type="radio" />
              <p> Save Card Details </p>
            </div>
          </div>
          <button>Proceed</button>
        </div>
        <div className="securepayment">
      <div className="secure-header">
        <h5>Secure Payment</h5>
        <div className="lock">
          <img src={lockimg} alt="" />
        </div>
        </div>
        <span>
          Your payment information is protected with  <br /> industry-leading
          security measures
        </span>
   
    </div>
      </div>
   
    </div>
  );
};

export default CardInfo;
