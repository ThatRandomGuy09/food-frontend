import React from "react";
import "./GetStarted.css";

function Card1() {
  return (
    <div className="card">
      <img
        src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769706/rider-image_aq1w7e.png"
        alt="Delivery person on a scooter"
        className="card-image"
      />
      <div className="exclusive-perks">Avail exclusive perks</div>
      <div className="gradient-overlay">
        <div className="banner-text">
          <p className="sub-heading">Signup as a rider</p>
          <h1 className="main-heading">Ride with us</h1>
          <button className="cta-button">Get Started</button>
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="card">
      <img
        src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769634/chef_tig0f3.png"
        alt="Second card placeholder"
        className="card-image"
      />
      <div className="exclusive-perks">Earn more with lower fees</div>
      <div className="gradient-overlay">
        <div className="banner-text">
          <p className="sub-heading">Signup as a business</p>
          <h1 className="main-heading">Partner with us</h1>
          <button className="cta-button">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default function GetStarted() {
  return (
    <div className="get-started-container">
      <Card1 />
      <Card2 />
    </div>
  );
}
