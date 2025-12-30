import React, { useState } from "react";
import "./Signup.css";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://zerodha-clone-t5ol.onrender.com/api/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Signup failed");
        return;
      }

      alert("Signup successful! Please login.");
      window.location.href = "/login";
    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Create your Zerodha account</h2>
        <p className="subtitle">Start investing in stocks & mutual funds</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Create password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Sign up</button>
        </form>

        <p className="login-link">
          Already have an account?{" "}
          <span onClick={() => (window.location.href = "/login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
