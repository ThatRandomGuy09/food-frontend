import React, { useEffect, useState } from "react";
import { getBasketItems, saveBasketItems } from "../../utils/localStorage";
import "./MyBasket.css";
const MyBasket = ({ isOpen, onClose, initialItems = null }) => {
  const [basketItems, setBasketItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const deliveryFee = 3;
  const discount = 3;
  const minimumOrder = 20;

  const remainingAmount = Math.max(0, minimumOrder - (totalPrice - deliveryFee + discount));

  const isMinimumMet = (totalPrice - deliveryFee + discount) >= minimumOrder;

  useEffect(() => {
    if (isOpen || initialItems) {
      const items = initialItems || getBasketItems();
      const grouped = items.reduce((acc, item) => {
        const existingItem = acc.find((i) => i.uniqueId === item.uniqueId);
        if (existingItem) {
          existingItem.quantity += item.quantity;
          existingItem.totalPrice += item.quantity * item.price;
        } else {
          acc.push({
            ...item,
            quantity: item.quantity,
            totalPrice: item.quantity * item.price,
          });
        }
        return acc;
      }, []);

      setBasketItems(grouped);
      const subtotal = grouped.reduce((acc, item) => acc + item.totalPrice, 0);
      setTotalPrice(subtotal + deliveryFee - discount);
    }
  }, [isOpen, initialItems]);

  const handleShare = () => {
    const items = getBasketItems();
    const jsonString = JSON.stringify(items);
    const encodedData = btoa(encodeURIComponent(jsonString));
    
    const baseUrl = window.location.origin;
    const shareableUrl = `${baseUrl}/checkout/${encodedData}`;
    
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(shareableUrl)
        .then(() => {
          alert('Link copied to clipboard! Share it with your friends.');
        })
        .catch(() => {
          prompt('Copy this link:', shareableUrl);
        });
    } else {
      prompt('Copy this link:', shareableUrl);
    }
  };

  const handleRemoveItem = (uniqueId) => {
    const currentItems = getBasketItems();
    const updatedItems = currentItems.filter(
      (item) => item.uniqueId !== uniqueId
    );
    saveBasketItems(updatedItems);

    const subtotal = updatedItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalPrice(subtotal + deliveryFee - discount);
    setBasketItems(updatedItems);
  };

  return (
    <>
      <div
        className={`basket-overlay ${isOpen ? "open" : ""}`}
        onClick={onClose}
      />

      <div className={`basket-container ${isOpen ? "open" : ""}`}>
        <button className="share-button" onClick={handleShare}>
          <div className="share-button-text">
            <img 
              src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1733042885/image_bysens.png" 
              alt="share" 
              className="share-icon"
            />
            Share this cart<br/> with your friends
          </div>
          <span className="copy-link-btn">Copy Link</span>
        </button>
        <div className="basket-header">
          <img
            src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769627/cart_ridijp.png"
            width={57}
            alt="cart"
          />
          <h2>My Basket</h2>
        </div>
        <div className="basket-items">
          {basketItems.length > 0 ? (
            basketItems.map((item, index) => (
              <BasketItem
                key={index}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                uniqueId={item.uniqueId}
                description={item.description}
                onRemove={handleRemoveItem}
              />
            ))
          ) : (
            <p style={{ textAlign: "center", fontSize: "1.2rem" }}>
              Your basket is empty.
            </p>
          )}
        </div>
        <div className="price-summary">
          <div className="price-row">
            <span className="price-key">Sub Total:</span>
            <span>₹{(totalPrice - deliveryFee + discount).toFixed(2)}</span>
          </div>
          <div className="price-row">
            <span className="price-key">Delivery Fee:</span>
            <span>₹{deliveryFee.toFixed(2)}</span>
          </div>
          <div className="price-row">
            <span className="price-key">Discount:</span>
            <span>-₹{discount.toFixed(2)}</span>
          </div>
        </div>
        <div className="total-section">
          <div className="total-row">
            <span>Total to pay</span>
            <span className="total-value">₹{totalPrice.toFixed(2)}</span>
          </div>
        </div>
        <div className="coupon-section">
          <div className="free-item-btn">
            <div>Choose your free item..</div>
            <img
              src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769664/items_psfqdy.png"
              width={30}
            ></img>
          </div>
          <div className="free-item-btn">
            <div>Apply Coupon Code here</div>
            <img
              src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769610/apply-coupon_yn9e5w.png"
              width={30}
            ></img>
          </div>
        </div>
        <div className="delivery-options">
          <div className="delivery-opt-row">
            <div className="option">
              <img
                src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769709/scooter_hmg7hv.png"
                width={35}
              ></img>
              <div className="details">
                <span>Delivery</span>
                <span>Starts at 17:50</span>
              </div>
            </div>
            <div className="option">
              <img
                src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769637/collection_c0dgr1.png"
                width={35}
              ></img>
              <div className="details">
                <span>Collection</span>
                <span>Starts at 16:30</span>
              </div>
            </div>
          </div>
        </div>
        <div className="basket-actions">
          <div className={`checkout-btn ${!isMinimumMet ? 'disabled' : 'enabled'}`}>
            {isMinimumMet ? (
              <a href="/checkout">
                <div className="checkout-content">
                  <img
                    src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769631/checkout_messdv.png"
                    width={25}
                    alt="checkout"
                  />
                  Checkout!
                </div>
              </a>
            ) : (
              <div className="checkout-content">
                <img
                  src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769631/checkout_messdv.png"
                  width={25}
                  alt="checkout"
                />
                Checkout!
              </div>
            )}
            {!isMinimumMet ? (
              <div className="minimum-order-message">
                Minimum delivery is ₹{minimumOrder}, You must Spend <span className="remaining-amount">₹{remainingAmount.toFixed(2)} more</span> for the checkout!
              </div>
            ) : (
              <div className="minimum-order-message success-message">
                We are open now, but delivery starts at <span className="highlight-time">18:00</span> however you may order and collect in store now
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const BasketItem = ({ name, price, quantity, uniqueId, description, onRemove }) => {
  return (
    <div className="basket-item">
      <div className="item-quantity">{quantity}x</div>
      <div className="item-details">
        <span className="item-price">₹{price}</span>
        <h3>{name}</h3>
        <p className="item-description">{description}</p>
      </div>
      <button className="remove-btn" onClick={() => onRemove(uniqueId)}>
        <img
          src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769640/delete_dajeew.png"
          width={20}
          alt="remove"
        />
      </button>
    </div>
  );
};

export default MyBasket;
