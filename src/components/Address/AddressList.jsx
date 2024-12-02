import { useState, useEffect } from "react";
import "./AddressList.css";
import AddressForm from "./EditAddress";
import { getAddresses, removeAddress } from "../../utils/addressUtils";

const AddressList = ({ onAddressSelect }) => {
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [isAddressFormOpen, setIsAddressFormOpen] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) return;

        const response = await fetch("http://localhost:5000/api/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const userData = await response.json();
          console.log(userData);
          setUserName(userData.name);
        }
      } catch (error) {
        console.log(error);
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);
  useEffect(() => {
    const savedAddresses = getAddresses();
    setAddresses(savedAddresses);
  }, []);

  const handleAddAddress = () => {
    setIsAddressFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsAddressFormOpen(false);
    setAddresses(getAddresses());
  };

  const handleRemoveAddress = (addressId) => {
    removeAddress(addressId);
    setAddresses(getAddresses());
  };

  const handleAddressSelect = (address) => {
    setSelectedAddressId(address.id);
    localStorage.setItem("selectedAddress", JSON.stringify(address));
    window.location.href = "/checkout";
  };

  return (
    <div className="addresses-container">
      <div className="addresses-header">
        <a href="/checkout">
          <img
            src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769615/back_pynx8u.png"
            width={39}
            height={39}
            alt="Back"
          />
        </a>
        <h1>Your Addresses</h1>
      </div>

      <div className="addresses-grid">
        <div className="address-card add-new" onClick={handleAddAddress}>
          <div className="add-icon">+</div>
          <span>Add Address</span>
        </div>

        {addresses.map((address) => (
          <div
            key={address.id}
            className={`address-card ${
              selectedAddressId === address.id ? "selected" : ""
            }`}
            onClick={() => handleAddressSelect(address)}
          >
            <div className="address-content">
              <div className="address-header">
                <h3 className="address-name">{userName}</h3>
                {address.isDefault && (
                  <span className="default-badge">Default</span>
                )}
              </div>
              <p className="address-text">{address.address}</p>
              <p className="phone-number">Phone Number: {address.phone}</p>

              <div className="address-actions">
                <button className="action-btn edit">Edit</button>
                <button
                  className="action-btn remove"
                  onClick={() => handleRemoveAddress(address.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isAddressFormOpen && (
        <div className="address-form-overlay">
          <div className="address-form-popup">
            <AddressForm onClose={handleCloseForm} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressList;
