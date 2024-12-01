import React from "react";
import "./ResCard.css";

export default function ResCard(prop) {
  return (
    <div className="res-card-container">
      <img src={prop.src} alt={prop.type} className="res-card-image" />
      <div className="res-card-content">
        <div className="res-card-title">{prop.type}</div>
      </div>
    </div>
  );
}
