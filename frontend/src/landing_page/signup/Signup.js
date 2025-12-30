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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);

    // later you will connect backend API here
    alert("Signup submitted (backend not connected yet)");
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
          Already have an account? <span>Login</span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
