import React, { useEffect, useState } from "react";
import "./PaymentInterface.css";
import { getBasketItems } from "../../../utils/localStorage";

const PaymentInterface = () => {
  const [selectedPayment, setSelectedPayment] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const items = getBasketItems();
    const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setTotalAmount(total + 10);
  }, []);

  return (
    <div className="payment-container">
      <div className="payment-header">
        <a href="/checkout">
          <img
            src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769615/back_pynx8u.png"
            width={39}
            height={39}
          ></img>
        </a>
        <h1>Choose and Pay</h1>
      </div>

      <div className="payment-content">
        <div className="payment-options">
          <div className="wallet-section">
            <div className="wallet-content">
              <div className="option-icon wallet">
                <img
                  src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769726/wallet_kn6b4w.png"
                  width={15.62}
                  height={13.75}
                ></img>
              </div>
              <div className="option-details">
                <span className="option-name">Wallet</span>
                <span className="option-balance">Available balance: ₹300</span>
              </div>
            </div>
            <div className="wallet-arrow">
              <img src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769612/arrow-right_yb29di.png"></img>
            </div>
          </div>
          <div className="separator"></div>

          <div
            className={`payment-option ${
              selectedPayment === "maestrocard" ? "selected" : ""
            }`}
            onClick={() => setSelectedPayment("maestrocard")}
          >
            <div className="option-content">
              <div className="option-icon maestrocard">M</div>
              <span className="option-name">MaestroCard</span>
            </div>
            <div className="radio-button">
              <div className="radio-inner"></div>
            </div>
          </div>

          <div
            className={`payment-option ${
              selectedPayment === "paypal" ? "selected" : ""
            }`}
            onClick={() => setSelectedPayment("paypal")}
          >
            <div className="option-content">
              <div className="option-icon paypal">P</div>
              <span className="option-name">Paypal</span>
            </div>
            <div className="radio-button">
              <div className="radio-inner"></div>
            </div>
          </div>

          <div
            className={`payment-option ${
              selectedPayment === "stripe" ? "selected" : ""
            }`}
            onClick={() => setSelectedPayment("stripe")}
          >
            <div className="option-content">
              <div className="option-icon stripe">S</div>
              <span className="option-name">Stripe</span>
            </div>
            <div className="radio-button">
              <div className="radio-inner"></div>
            </div>
          </div>

          <div className="payment-option add-card-option">
            <div className="option-content">
              <div className="addIcon">+</div>
              <span className="option-name">Add Debit Card</span>
            </div>
          </div>
        </div>

        <div className="payment-summary">
          <div className="amount-row">
            <span>Amount to be payed</span>
            <span className="amount">₹{totalAmount.toFixed(2)}</span>
          </div>
          <div className="separator"></div>
          <a href="/order-success">
            <button className="proceed-button">Proceed Payment</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaymentInterface;
