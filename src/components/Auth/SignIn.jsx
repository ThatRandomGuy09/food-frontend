import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";
import { signin } from "../../utils/api";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await signin(formData);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data));
      setFormData({
        email: "",
        password: "",
      });
      navigate("/");
    } catch (error) {
      setError(
        error.response?.data?.message || "An error occurred during sign in"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-form">
        <div className="logo">
          <img
            src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769670/logo-coloured_bvhgb5.png"
            height={53}
          ></img>
        </div>
        <div className="welcome-text">
          <h2>Welcome Back 👋</h2>
          <p>
            Today is a new day. It&apos;s your day. You shape it.
            <br />
            Sign in to start ordering.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Example@email.com"
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="At least 8 characters"
              required
            />
          </div>
          <a href="#" className="forgot-password">
            Forgot Password?
          </a>
          <button type="submit" className="signin-button">
            Sign in
          </button>
        </form>
        <div className="signup-text">
          <p>
            Don’t you have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>
      <div className="signin-image">
        <img src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769622/auth_zldoea.png"></img>
      </div>
    </div>
  );
};

export default SignIn;
