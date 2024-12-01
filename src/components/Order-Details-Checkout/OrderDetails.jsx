import React, { useEffect, useState } from "react";
import "./OrderDetails.css";
import { getBasketItems } from "../../utils/localStorage";
import { Link } from "react-router-dom";

const OrderDetails = () => {
  const [groupedItems, setGroupedItems] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);

  useEffect(() => {
    const items = getBasketItems();
    const grouped = items.reduce((acc, item) => {
      const existingItem = acc.find((i) => i.uniqueId === item.uniqueId);
      if (existingItem) {
        existingItem.quantity += item.quantity;
        existingItem.totalPrice += item.price * item.quantity;
      } else {
        acc.push({
          ...item,
          quantity: item.quantity,
          totalPrice: item.price * item.quantity,
        });
      }
      return acc;
    }, []);

    setGroupedItems(grouped);

    const savedAddress = localStorage.getItem("selectedAddress");
    if (savedAddress) {
      setSelectedAddress(JSON.parse(savedAddress));
    }
  }, []);

  const getShortAddress = (fullAddress) => {
    if (!fullAddress) return "Select an address...";
    return fullAddress.length > 40
      ? `${fullAddress.substring(0, 30)}...`
      : fullAddress;
  };

  return (
    <div className="order-details-wrapper">
      <div className="order-detail-title">
        <Link to="/product">
          <img
            src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769615/back_pynx8u.png"
            width={39}
            height={39}
            alt="Back"
          ></img>
        </Link>
        <div>Your Order Details</div>
      </div>
      <div className="order-details-container">
        <div className="order-items">
          <div className="CheckPage_item-list">
            {groupedItems.map((item, index) => (
              <div className="item" key={index}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="CheckPage_item-image"
                />
                <div className="CheckPage_item-info">
                  <p className="CheckPage_item-title">{item.name}</p>
                  <p className="CheckPage_item-quantity">
                    {item.quantity}x item
                  </p>
                </div>
                <p className="CheckPage_item-price">
                  ₹{item.totalPrice.toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="notes-section">
            <label htmlFor="order-notes" className="notes-label">
              Notes
            </label>
            <input
              type="text"
              id="order-notes"
              placeholder="Add order notes"
              className="notes-input"
            />
          </div>
        </div>

        <div className="payment-summary">
          <a href="/address">
            <div className="delivery-address">
              <div className="delivery-add-icon">
                <div className="address-icon">
                  <img
                    src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769642/deliveryPin_zvmydp.png"
                    width={13.5}
                    height={17.5}
                    alt="Pin"
                  />
                </div>
                <div className="address-info">
                  <p className="address-title">Delivery Address</p>
                  <p className="address-text">
                    {selectedAddress
                      ? getShortAddress(selectedAddress.address)
                      : "Select an address..."}
                  </p>
                </div>
              </div>
              <img
                src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769612/arrow-right_yb29di.png"
                width={5}
                height={10}
                alt="Arrow Right"
              />
            </div>
          </a>
          <hr className="divider" />
          <div className="summary-details">
            <div className="summary-row">
              <p>Items</p>
              <p>
                ₹
                {groupedItems.reduce(
                  (total, item) => total + item.totalPrice,
                  0
                )}
              </p>
            </div>
            <div className="summary-row">
              <p>Sales Tax</p>
              <p>₹10</p>
            </div>
            <hr className="divider" />
            <div className="summary-row subtotal">
              <p>Subtotal ({groupedItems.length} items)</p>
              <p>
                ₹
                {groupedItems.reduce(
                  (total, item) => total + item.totalPrice,
                  0
                ) + 10}
              </p>
            </div>
          </div>
          <a href="/payment">
            <button className="payment-button">Choose Payment Method</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
