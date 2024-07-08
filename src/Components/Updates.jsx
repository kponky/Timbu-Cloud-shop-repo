import React from "react";

const Updates = () => {
  return (
    <div className="updates-container">
      <div>
        <h5>Get our Updates</h5>
        <p>Subscribe to our newsletter and get our latest update</p>
        <div>
          <input type="text" />
          <button>SUBSCRIBE</button>
        </div>
      </div>

      <div className="download-app">
        <h5>Downlaod our App</h5>
        <div className="appstore">
          <img src="" alt="" />
          <div className="app-txt">
            <p>Downlaod on the app </p>
            <h5>App Store</h5>
          </div>
        </div>
        <div className="appstore">
          <img src="" alt="" />
          <div className="app-txt">
            <p>Get IT ON </p>
            <h5>Google Play</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updates;
