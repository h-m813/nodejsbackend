const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "yamabiko.proxy.rlwy.net", // ✅ Host only, no port here
  port: 29709, // ✅ Port is separate
  user: "root",
  password: "lECWDahzDvSlCaUqLhXRQBhIwlYiBFbN", // ✅ Replace with yours
  database: "railway",
});

db.connect((err) => {
  if (err) {
    console.error("❌ DB connection failed:", err);
  } else {
    console.log("✅ Connected to Railway MySQL");
  }
});

module.exports = db;
