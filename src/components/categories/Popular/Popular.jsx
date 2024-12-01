import React from "react";
import PopularCard from "./PopularCard";
import "./Popular.css";

const cards = [
  {
    src: "https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769624/burgerNfastfood_rxbsoc.png",
    type: "Burger & Fast food",
    NumOfRes: "21",
  },
  {
    src: "https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769712/salads_p2by5v.png",
    type: "Salads",
    NumOfRes: "32",
  },
  {
    src: "https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769689/pasta_n2jksz.png",
    type: "Pasta & Casuals",
    NumOfRes: "4",
  },
  {
    src: "https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769693/pizza_lfegkf.png",
    type: "Pizza",
    NumOfRes: "32",
  },
  {
    src: "https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769620/breakfast_h1i8fq.png",
    type: "Breakfast",
    NumOfRes: "4",
  },
  {
    src: "https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769717/soups_ggnj2p.png",
    type: "Soups",
    NumOfRes: "32",
  },
];

export default function Popular() {
  return (
    <div className="popular-container">
      <p className="popular-title">Order.uk Popular Categories 🤩</p>
      <div className="popular-cards">
        {cards.map((items, index) => (
          <PopularCard
            src={items.src}
            type={items.type}
            NumOfRes={items.NumOfRes}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
