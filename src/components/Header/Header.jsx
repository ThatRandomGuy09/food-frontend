import React from "react";
import "./header.css";

export default function Header({ onCartClick }) {
  return (
    <div id="header">
      <div id="firstOrder">
        <p id="star">🌟</p>
        <p>
          Get 5% Off your first order,<span id="underline"> Promo: ORDER5</span>
        </p>
      </div>

      <div id="address">
        <img
          src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769692/pin_pkolkf.png"
          width={25}
          height={25}
          alt="address"
        />
        <p>Regent Street, A4, A4201, London</p>
        <p id="underline">Change Location</p>
      </div>

      <div id="cart" onClick={onCartClick}>
        <div id="myCart">
          <img
            src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769627/cart_ridijp.png"
            width={43}
            height={43}
            alt="cart"
          />
          <p>My Cart</p>
        </div>
        <div id="forward">
          <img
            src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769651/forward_xdmoft.png"
            width={38}
            height={38}
            alt="forward"
          />
        </div>
      </div>
    </div>
  );
}
