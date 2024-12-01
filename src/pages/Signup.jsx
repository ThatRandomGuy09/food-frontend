import React from "react";
import Footer from "../components/Footer/Footer";
import Signup from "../components/Auth/Signup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate("/signin", {
          state: { message: "Account created successfully! Please sign in." },
        });
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <div>
      <Signup />
      <Footer />
    </div>
  );
}
