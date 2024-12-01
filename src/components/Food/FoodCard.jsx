import React from "react";
import "./FoodCard.css";
import { getBasketItems, saveBasketItems } from "../../utils/localStorage";

export default function FoodCard({ id, img, title, description, price, onClick }) {
  const handleAddToBasket = () => {
    const currentItems = getBasketItems();
    const uniqueId = `${img}`;
    
    const existingItem = currentItems.find(item => item.uniqueId === uniqueId);
    
    let updatedItems;
    if (existingItem) {
      updatedItems = currentItems.map(item =>
        item.uniqueId === uniqueId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedItems = [...currentItems, {
        uniqueId,
        id,
        name: title,
        price: parseFloat(price.replace('₹', '')),
        image: img,
        quantity: 1
      }];
    }
    
    saveBasketItems(updatedItems);
    onClick && onClick();
  };

  return (
    <div className="foodCard-container">
      <div className="foodCard-content">
        <div className="foodCard-details">
          <h3 className="foodCard-title">{title}</h3>
          <p className="foodCard-description">{description}</p>
          <p className="foodCard-price">{price}</p>
        </div>
        <div className="foodCard-image-wrapper">
          <img src={img} alt={title} className="foodCard-image" />
          <div className="foodCard-add" onClick={handleAddToBasket}>
            <img src="add.png" alt="Add to cart" width={49} height={49} />
          </div>
        </div>
      </div>
    </div>
  );
}
