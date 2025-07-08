const express = require("express");
const router = express.Router();
const User = require("../models/User");

// ✅ SIGNUP
router.post("/signup", async (req, res) => {
  const { phone, password } = req.body;
  if (!phone || !password)
    return res.status(400).json({ message: "Phone and password required" });

  try {
    const existingUser = await User.findOne({ where: { phone } });
    if (existingUser)
      return res.status(409).json({ message: "User already exists" });

    await User.create({ phone, password });
    console.log("✅ Signup successful:", phone);
    res.status(200).json({ message: "Signup successful" });
  } catch (err) {
    console.error("❌ Signup error:", err);
    res.status(500).json({ message: "DB error", error: err });
  }
});

// ✅ LOGIN
router.post("/login", async (req, res) => {
  const { phone, password } = req.body;
  if (!phone || !password)
    return res.status(400).json({ message: "Phone and password required" });

  try {
    const user = await User.findOne({ where: { phone, password } });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    console.log("✅ Login successful for:", phone);
    res.status(200).json({ message: "Login successful", user });
  } catch (err) {
    console.error("❌ Login error:", err);
    res.status(500).json({ message: "DB error", error: err });
  }
});

module.exports = router;
