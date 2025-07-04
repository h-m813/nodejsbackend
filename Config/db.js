const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost", // or "127.0.0.1"
  port: 3306, // default MySQL port
  user: "root", // default username in local setup
  password: "admin", // default password is empty in XAMPP/WAMP
  database: "myprojectdb", // change to your local database name
});

db.connect((err) => {
  if (err) {
    console.error("❌ DB connection failed:", err);
  } else {
    console.log("✅ Connected to Local MySQL");
  }
});

module.exports = db;
