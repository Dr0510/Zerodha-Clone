require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const User = require("./model/UserModel");

const app = express();

const PORT = process.env.PORT || 3002;
const MONGO_URI = process.env.MONGO_URI;

/* =======================
   CORS CONFIG (NODE 22 SAFE)
======================= */
app.use(
  cors({
    origin: [
      "https://zerodha-frontend-dd5t.onrender.com",
      "http://localhost:3000",
    ],
    credentials: true,
  })
);

/* =======================
   MIDDLEWARE
======================= */
app.use(express.json());

/* =======================
   MONGODB CONNECTION
======================= */
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => {
    console.error("MongoDB Error:", err);
    process.exit(1);
  });

/* =======================
   HEALTH CHECK (IMPORTANT)
======================= */
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

/* =======================
   SIGNUP API
======================= */
app.post("/api/signup", async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;

    if (!name || !email || !mobile || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const existingUser = await User.findOne({
      $or: [{ email }, { mobile }],
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      mobile,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "Signup successful",
      userId: user._id,
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

/* =======================
   LOGIN API
======================= */
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    res.json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

/* =======================
   HOLDINGS & POSITIONS
======================= */
app.get("/allHoldings", async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  const allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

/* =======================
   ORDERS
======================= */
app.post("/newOrder", async (req, res) => {
  const { name, qty, price, mode } = req.body;

  const newOrder = new OrdersModel({ name, qty, price, mode });
  await newOrder.save();

  res.json({ message: "Order saved!" });
});

/* =======================
   SERVER START
======================= */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
