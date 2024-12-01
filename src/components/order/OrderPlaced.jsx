import React from "react";
import "./OrderPlaced.css";
import { getBasketItems } from "../../utils/localStorage";

const groupItemsByTitle = (items) => {
  return items.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.uniqueId === item.uniqueId);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      acc.push({ ...item });
    }
    return acc;
  }, []);
};

const OrderPlaced = () => {
  const items = getBasketItems();
  const groupedItems = groupItemsByTitle(items);


  if (!items.length) {
    return (
      <div className="order-container">
        <h1 className="order-title">No Items in Cart</h1>
        <p className="order-subtitle">
          Your cart is empty. Please add items to place an order.
        </p>
        <div className="order-details">
          <a href="/">
            <div className="back-Button">Back to Home</div>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="order-container">
      <div className="success-icon">
        <div className="outer-circle">
          <div className="inner-circle">
            <img
              src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769628/check_pc8w1t.png"
              alt="Success Icon"
            />
          </div>
        </div>
      </div>

      <h1 className="order-title">Order Placed Successfully</h1>
      <p className="order-subtitle">
        Your order is confirmed and on its way. <br />
        Get set to savor your chosen delights!
      </p>

      <div className="order-details">
        {groupedItems.length > 0 ? (
          groupedItems.map((item, index) => (
            <p key={index}>
              {item.name} - {item.quantity}x
            </p>
          ))
        ) : (
          <p>No items in the cart.</p>
        )}

        <a href="/">
          <div className="back-Button">Back to Home</div>
        </a>
      </div>
    </div>
  );
};

export default OrderPlaced;
