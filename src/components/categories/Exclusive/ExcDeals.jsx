import React from "react";
import "./exc.css";

export default function ExcDeals() {
  return (
    <div className="deals-container">
      <div className="deals-header">
        <div className="deals-title">
          Up to -40% 🎊 Order.uk exclusive deals
        </div>
        <div className="deals-categories">
          <p>Vegan</p>
          <p>Sushi</p>
          <p className="deals-highlight">Pizza & Fast food</p>
          <p>others</p>
        </div>
      </div>

      <div className="deals-images">
        <img
          src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769621/burger_c0k7tq.png"
          alt="Restaurant 1"
          className="deal-image"
        />
        <img
          src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732807746/res2_kql3qm.png"
          alt="Restaurant 2"
          className="deal-image"
        />
        <img
          src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769621/burger_c0k7tq.png"
          alt="Restaurant 3"
          className="deal-image"
        />
      </div>
    </div>
  );
}
