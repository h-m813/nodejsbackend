const express = require("express");
const cors = require("cors");
const sequelize = require("./Config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/auth", userRoutes);

app.listen(5000, () => console.log("✅ Server running on port 5000"));
