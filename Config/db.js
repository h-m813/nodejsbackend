const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "railway",
  "root",
  "lgpZviMJTRfkfeZustxePzzbmnalnkVA",
  {
    host: "trolley.proxy.rlwy.net",
    port: 29884,
    dialect: "mysql",
    logging: false,
  }
);

sequelize
  .authenticate()
  .then(() => console.log("✅ Connected to Railway MySQL via Sequelize"))
  .catch((err) => console.error("❌ DB connection error:", err));

module.exports = sequelize;
