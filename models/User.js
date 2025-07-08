const { DataTypes } = require("sequelize");
const sequelize = require("../Config/db");

const User = sequelize.define(
  "user1",
  {
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "user1",
  }
);

// Sync the table (if not already created)
User.sync();

module.exports = User;
