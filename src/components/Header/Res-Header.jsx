import React from "react";
import './Res-Header.css'
export default function ResHeader() {
  return (
    <div className="Res-Header">
      <div className="Res-Header-top">
        <div className="res-header-left">
          <img src="mikeRoss.png"></img>
          <div>Mike Ross</div>
        </div>
        <div className="res-header-right">
          <img src="cart.png"></img>
          <div>My Cart</div>
        </div>
      </div>
      <div className="Res-Header-bottom">Lution Street, N4G-00....</div>
    </div>
  );
}
