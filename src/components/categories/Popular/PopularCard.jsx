import React from "react";
import "./PopularCard.css";

export default function PopularCard(prop) {
  return (
    <div className="Card-container">
      <img src={prop.src} alt={prop.type} className="Card-image" />
      <div className="Card-content">
        <div className="Card-title">{prop.type}</div>
        <div className="Card-restaurants">{prop.NumOfRes} Restaurants</div>
      </div>
    </div>
  );
}
