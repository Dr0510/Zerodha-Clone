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
   CORS (FIXED)
======================= */
app.use(
  cors({
    origin: [
      "https://zerodha-dashboard-a2tz.onrender.com",
      "http://localhost:3000",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
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
   HEALTH CHECK
======================= */
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

/* =======================
   AUTH
======================= */
app.post("/api/signup", async (req, res) => {
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

  res.status(201).json({ message: "Signup successful" });
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return res.status(400).json({ message: "Invalid password" });

  res.json({ message: "Login successful", user });
});

/* =======================
   HOLDINGS & POSITIONS
======================= */
app.get("/allHoldings", async (req, res) => {
  const data = await HoldingsModel.find({});
  res.json(data);
});

app.get("/allPositions", async (req, res) => {
  const data = await PositionsModel.find({});
  res.json(data);
});

/* =======================
   ORDERS
======================= */
app.post("/newOrder", async (req, res) => {
  const order = new OrdersModel(req.body);
  await order.save();
  res.json({ message: "Order saved!" });
});

/* =======================
   START SERVER
======================= */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
