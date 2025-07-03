const express = require("express");
const router = express.Router();
const db = require("../Config/db");

// ✅ SIGNUP
router.post("/signup", (req, res) => {
  console.log("BODY RECEIVED (signup):", req.body); // ✅ Log request body
  const { phone, password } = req.body;
  console.log("Signup received:", phone, password);

  if (!phone || !password) {
    return res.status(400).json({ message: "Phone and password required" });
  }

  // Check if user already exists
  db.query("SELECT * FROM user WHERE phone = ?", [phone], (err, results) => {
    if (err) {
      console.error("❌ Signup DB error:", err);
      return res.status(500).json({ message: "DB error", error: err });
    }
    if (results.length > 0) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Insert new user
    db.query(
      "INSERT INTO user (phone, password) VALUES (?, ?)",
      [phone, password],
      (err, result) => {
        if (err) {
          console.error("❌ Signup DB error:", err);
          return res.status(500).json({ message: "DB error", error: err });
        }
        console.log("✅ Signup successful:", phone);
        return res.status(200).json({ message: "Signup successful" });
      }
    );
  });
});

// ✅ LOGIN
router.post("/login", (req, res) => {
  console.log("BODY RECEIVED (login):", req.body); // ✅ Log request body
  const { phone, password } = req.body;

  if (!phone || !password) {
    return res.status(400).json({ message: "Phone and password required" });
  }

  db.query(
    "SELECT * FROM user WHERE phone = ? AND password = ?",
    [phone, password],
    (err, results) => {
      if (err) {
        console.error("❌ Login DB error:", err);
        return res.status(500).json({ message: "DB error", error: err });
      }

      if (results.length === 0) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const user = results[0];
      console.log("✅ Login successful for:", phone);
      return res.status(200).json({ message: "Login successful", user });
    }
  );
});

module.exports = router;
