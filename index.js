const express = require("express");
const cors = require("cors"); // (optional for frontend connection)
const app = express();

app.use(cors()); // ✅ Allow requests from React
app.use(express.json()); // ✅ Parse JSON body from React

const userRoutes = require("./routes/userRoutes");
app.use("/auth", userRoutes);

app.listen(5000, () => console.log("✅ Server running on port 5000"));
