import React from "react";
import '../Styles/updates.css';
import appleLogo from "../assets/apple-big-logo.png";
import playstoreLogo from '../assets/playstore_300218.png';


const Updates = () => {
  return (
    <div className="updates-container">
      <div className="update-item">
        <h4>Get Our Updates</h4>
        <p>Subscribe to our newsletter and get our latest update</p>
        <div className="update-input">
          <input type="text" />
          <button>SUBSCRIBE</button>
        </div>
      </div>

      <div className="download-app">
        <h5>Download our App</h5>
      <div className="store">
      <div className="appstore">
      <img src={appleLogo} alt="" />
      <div className="app-txt">
        <p>Downlaod on the app </p>
        <h5>App Store</h5>
      </div>
    </div>
    <div className="appstore">
      <img src={playstoreLogo} alt="" />
      <div className="app-txt">
        <p>Get IT ON </p>
        <span>Google Play</span>
      </div>
    </div>
      </div>
      </div>
    </div>
  );
};

export default Updates;
