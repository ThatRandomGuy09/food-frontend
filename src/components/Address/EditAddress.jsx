import React, { useState, useEffect } from "react";
import "./AddressForm.css";
import { saveAddress, removeAddress } from "../../utils/addressUtils";

const AddressForm = ({ onClose, editAddress }) => {
  const [formData, setFormData] = useState({
    state: "",
    city: "",
    pinCode: "",
    phone: "",
    fullAddress: ""
  });

  useEffect(() => {
    if (editAddress) {
      const addressParts = editAddress.fullAddress.split(', ');
      setFormData({
        state: editAddress.state,
        city: editAddress.city,
        pinCode: editAddress.pinCode,
        phone: editAddress.phone,
        fullAddress: addressParts[0] || editAddress.fullAddress
      });
    }
  }, [editAddress]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editAddress) {
      removeAddress(editAddress.id);
    }

    const addressData = {
      state: formData.state,
      city: formData.city,
      pinCode: formData.pinCode,
      phone: formData.phone,
      fullAddress: formData.fullAddress, 
      isDefault: editAddress ? editAddress.isDefault : false
    };

    saveAddress(addressData);
    onClose();
  };

  return (
    <div className="address-form-container">
      <button className="close-button" onClick={onClose}>&times;</button>
      <div className="address-header">
        <img 
          src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769608/addressLoc_sghbgi.png" 
          width={20} 
          height={20} 
          alt="Location" 
        />
        <span>{editAddress ? 'Edit Address' : 'Add Address'}</span>
      </div>

      <form className="address-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <select 
            className="form-input" 
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          >
            <option value="" disabled>State</option>
            <option value="state1">State 1</option>
            <option value="state2">State 2</option>
          </select>

          <input
            type="text"
            name="city"
            className="form-input"
            placeholder="City/District"
            value={formData.city}
            onChange={handleChange}
            required
          />

          <input 
            type="text" 
            name="pinCode"
            className="form-input" 
            placeholder="Pin Code"
            value={formData.pinCode}
            onChange={handleChange}
            required
          />

          <input 
            type="tel" 
            name="phone"
            className="form-input" 
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <textarea
          name="fullAddress"
          className="form-input full-width"
          placeholder="Enter full address"
          rows="4"
          value={formData.fullAddress}
          onChange={handleChange}
          required
        />

        <button type="submit" className="save-btn">
          Save
        </button>
      </form>
    </div>
  );
};

export default AddressForm;
