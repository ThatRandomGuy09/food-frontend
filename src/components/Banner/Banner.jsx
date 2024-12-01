import React from "react";
import "./Banner.css";
const OrderBanner = () => {
  return (
    <div className="order-banner">
      <img
        src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769656/Friendshehe_azwt5t.png"
        alt="Friends using app"
        className="hidden friends-image"
      />

      <div className="content-section">
        <div className="content-wrapper">
          <div className="logo-section">
            <img
              src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769670/logo-coloured_bvhgb5.png"
              alt="Logo"
              className="logo-image"
            />
            <span className="logo-text">ing is more</span>
          </div>
          <div className="highlighted-text">
            <span className="highlight">Personalised </span>& Instant
          </div>
          <p className="download-text">
            Download the OrderUK app for faster ordering
          </p>
          <div className="app-store">
            <img
              src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769611/app-store_gr4dgg.png"
              alt="App Store"
              width={412}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderBanner;
