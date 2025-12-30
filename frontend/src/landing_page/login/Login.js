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
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();
      console.log("LOGIN RESPONSE:", data);
      setLoading(false);

      if (!res.ok) {
        alert(data.message || "Login failed");
        return;
      }

      // ✅ SAFE STORAGE (works for all backend responses)
      localStorage.setItem(
        "user",
        JSON.stringify(data.user || data.data || data)
      );

      alert("Login successful");

      // ✅ SAME APP REDIRECT
      window.location.href = "https://zerodha-dashboard-a2tz.onrender.com";

    } catch (error) {
      console.error(error);
      setLoading(false);
      alert("Server error. Try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login to Zerodha</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
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

        <p>
          Don’t have an account?{" "}
          <span
            style={{ color: "#387ed1", cursor: "pointer" }}
            onClick={() => (window.location.href = "/signup")}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;

