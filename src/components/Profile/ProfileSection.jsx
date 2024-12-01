/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import "./ProfileSection.css";
import axios from "axios";
import { getPaymentMethods } from "../../utils/paymentUtils";
import EditPayment from "../Payment/EditPayment";

const ProfileSection = ({ onEditClick }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    gender: "",
    country: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isPaymentFormOpen, setIsPaymentFormOpen] = useState(false);
  const [editingPayment, setEditingPayment] = useState(null);
  const [payments, setPayments] = useState([]);

  const fetchUserData = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:5000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      setUserData({
        name: response.data.name,
        email: response.data.email,
        gender: response.data.gender || "",
        country: response.data.country || "",
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError("Failed to load user data");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
    const savedPayments = getPaymentMethods();
    setPayments(savedPayments);
  }, []);

  const handleAddPayment = () => {
    setEditingPayment(null);
    setIsPaymentFormOpen(true);
  };

  const handleEditPayment = (payment) => {
    setEditingPayment(payment);
    setIsPaymentFormOpen(true);
  };

  const handleClosePaymentForm = () => {
    setIsPaymentFormOpen(false);
    setEditingPayment(null);
    setPayments(getPaymentMethods());
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="profile-section">
      <div className="profile-header">
        <div
          className="profile-Left
        "
        >
          <a href="/">
            <img
              src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769615/back_pynx8u.png"
              width={39}
              height={39}
            ></img>
          </a>

          <h1 className="profile-title">My Profile</h1>
        </div>
        <button className="edit-button" onClick={onEditClick}>
          Edit
        </button>
      </div>

      <div className="profile-info">
        <div className="profile-image-container">
          <img
            src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769677/mikeRoss_b4jrni.png"
            alt="User"
            className="profile-image"
          />
          <h2 className="profile-name">{userData.name}</h2>
        </div>
        <div className="profile-details">
          <div className="profile-detail">
            <label>Full Name</label>
            <input type="text" value={userData.name} readOnly />
          </div>
          <div className="profile-detail">
            <label>Email Address</label>
            <input type="text" value={userData.email} readOnly />
          </div>
          <div className="profile-detail">
            <label>Gender</label>
            <input type="text" value="Male" readOnly />
          </div>
          <div className="profile-detail">
            <label>Country</label>
            <input type="text" value="India" readOnly />
          </div>
        </div>
      </div>

      <div className="payment-methods">
        <h2>Saved Payment Methods</h2>
        <div className="payment-method-list">
          {payments.map((payment) => (
            <div key={payment.id} className="payment-method">
              <div className="cardPng-comp">
                <div className="cardPng background"></div>
                <div className="cardPng image">
                  <img src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769625/card_tvxpxw.png" />
                </div>
              </div>

              <div>
                <p>{payment.cardNumber}</p>
                <p className="card-Name">{payment.name}</p>
              </div>
              <img
                src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769690/pen_rb3oqk.png"
                width={16}
                height={16}
                onClick={() => handleEditPayment(payment)}
                style={{ cursor: "pointer" }}
              />
            </div>
          ))}

          <div
            className="add-card"
            onClick={handleAddPayment}
            style={{ cursor: "pointer" }}
          >
            <div className="AddcardPng-comp">
              <div className="AddcardPng background"></div>
              <div className="AddcardPng image">
                <img src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769607/addCard_s86glu.png" />
              </div>
              <div className="addNew">Add New Card</div>
            </div>
          </div>
        </div>
      </div>

      {isPaymentFormOpen && (
        <div className="payment-edit-overlay">
          <div className="payment-edit-popup">
            <EditPayment
              onClose={handleClosePaymentForm}
              editPayment={editingPayment}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileSection;
