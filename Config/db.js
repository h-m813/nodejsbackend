const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "shuttle.proxy.rlwy.net",
  port: 11652,
  user: "root",
  password: "DzdomjpyNWMxfGMKVASSBvzKJLVXtwbg",
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
