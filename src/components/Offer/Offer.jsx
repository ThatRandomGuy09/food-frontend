import React from "react";
import "./Offer.css";

const offers = [
  {
    img: "https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769681/offer1_lj7s6p.png",
    discount: "-20%",
    offer: "First Order Discount",
  },
  {
    img: "https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769682/offer2_ymmwez.png",
    discount: "-20%",
    offer: "Vegan Discount",
  },
  {
    img: "https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769683/offer3_pyokfr.png",
    discount: "-100%",
    offer: "Free ice Cream Offer",
  },
];

const OfferCard = ({ discount, img, offer }) => {
  return (
    <div className="discountCard-container">
      <img
        src={img}
        alt="Customer enjoying a discount"
        className="discountCard-image"
      />
      <div className="discountCard-discount">{discount}</div>
      <div className="discountCard-overlay">
        <div className="discountCard-text">
          <p className="discountCard-subHeading">McDonald&apos;s East London</p>
          <h1 className="discountCard-mainHeading">{offer}</h1>
        </div>
        <div className="discountCard-add">
          <img src="add.png" width={49} height={49}></img>
        </div>
      </div>
    </div>
  );
};
export default function Offer() {
  return (
    <div className="offer">
      {offers.map((items, index) => {
        return (
          <OfferCard
            key={index}
            discount={items.discount}
            img={items.img}
            offer={items.offer}
          />
        );
      })}
    </div>
  );
}
