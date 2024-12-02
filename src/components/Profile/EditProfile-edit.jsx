import { useState, useEffect } from "react";
import axios from "axios";
import "./EditProfile-edit.css";

const EditProfileSection = ({ isOpen, onClose }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/auth/me`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUserData({
          name: response.data.name,
          email: response.data.email,
        });
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Failed to load user data");
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `${import.meta.env.VITE_API_BASE_URL}/api/auth/profile`,
        {
          email: userData.email,
          name: userData.name,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        onClose();
      } else {
        setError("Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      setError(error.response?.data?.error || "Failed to update profile");
    }
  };

  if (!isOpen) return null;
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="Editprofile-section">
      <div className="Editprofile-header">
        <div className="Editprofile-Left">
          <a href="/profile">
            <img
              src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769615/back_pynx8u.png"
              width={39}
              height={39}
              onClick={onClose}
              style={{ cursor: "pointer" }}
              alt="back"
            />
          </a>
          <h1 className="Editprofile-title">Edit Profile</h1>
        </div>
        <button
          className="save-button"
          onClick={() => {
            handleSave();
            onClose();
          }}
        >
          Save
        </button>
      </div>

      <div className="Editprofile-info">
        <div className="Editprofile-image-container">
          <img
            src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769677/mikeRoss_b4jrni.png"
            alt="User"
            className="Editprofile-image"
          />
          <h2 className="Editprofile-name">{userData.name}</h2>
        </div>

        <div className="Editprofile-details">
          <div className="Editprofile-detail">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="Editprofile-detail">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileSection;
