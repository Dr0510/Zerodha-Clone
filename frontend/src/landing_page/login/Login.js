import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "https://zerodha-clone-t5ol.onrender.com/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();
      setLoading(false);

      if (!res.ok) {
        alert(data.message || "Login failed");
        return;
      }

      // ✅ Save login state
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("Login successful");

      // ✅ Redirect to dashboard
      window.location.href = "https://zerodha-dashboard.onrender.com";
    } catch (error) {
      setLoading(false);
      alert("Something went wrong");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login to Zerodha</h2>
        <p className="subtitle">Welcome back</p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="signup-link">
          Don’t have an account?{" "}
          <span onClick={() => (window.location.href = "/signup")}>
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
