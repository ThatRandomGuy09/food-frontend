import React, { useState, useEffect } from "react";
import "./navbar.css";

export default function ProdNav() {
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
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769670/logo-coloured_bvhgb5.png"
          height={43}
          alt="Logo"
        />
      </div>

      <div className="navigation">
        <div className="others">Home</div>
        <div className="others">Browse Menu</div>
        <div className="others">Special Offers</div>
        <div className="home">Restaurants</div>
        <div className="others">Track Order</div>
        <a className="profile" href="/profile">
          <img
            src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769698/prof_b1hv18.png"
            height={27}
            width={30}
            alt="Profile Icon"
          />
          <span>Hey</span>
          <div>{userName}</div>
        </a>
      </div>

      <div className="hamburger">☰</div>
    </div>
  );
}
