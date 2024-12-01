import React, { useState, useEffect } from "react";
import "./EditPayment.css";
import {
  savePaymentMethod,
  removePaymentMethod,
} from "../../utils/paymentUtils";

function EditPayment({ onClose, editPayment }) {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiry: "",
    cvc: "",
    name: "",
  });

  useEffect(() => {
    if (editPayment) {
      setFormData({
        cardNumber: editPayment.cardNumber,
        expiry: editPayment.expiry,
        cvc: editPayment.cvc,
        name: editPayment.name,
      });
    }
  }, [editPayment]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editPayment) {
      removePaymentMethod(editPayment.id);
    }

    savePaymentMethod({
      ...formData,
      isDefault: editPayment ? editPayment.isDefault : false,
    });

    onClose();
  };

  const handleRemove = () => {
    if (editPayment) {
      removePaymentMethod(editPayment.id);
    }
    onClose();
  };

  return (
    <div className="overlay">
      <div className="container">
        <div className="container-top">
          <div className="edit-payment-header">
            <h1>
              {editPayment ? "Edit Payment Method" : "Add Payment Method"}
            </h1>
            <button className="close-button" onClick={onClose}>
              &times;
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-Group">
              <label>Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-Group">
              <label>Expiration</label>
              <input
                type="text"
                name="expiry"
                value={formData.expiry}
                onChange={handleChange}
                placeholder="MM/YY"
                required
              />
            </div>
            <div className="input-Group">
              <label>CVC</label>
              <input
                type="text"
                name="cvc"
                value={formData.cvc}
                onChange={handleChange}
                maxLength="3"
                required
              />
            </div>
            <div className="input-Group">
              <label>Name on Card</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="footer">
              {editPayment && (
                <button type="button" className="remove" onClick={handleRemove}>
                  Remove
                </button>
              )}
              <div className="right">
                <button type="button" className="cancel" onClick={onClose}>
                  Cancel
                </button>
                <button type="submit" className="save">
                  {editPayment ? "Update" : "Save"} Changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditPayment;
