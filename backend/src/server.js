const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db.js");

// Routs:
const authRoutes = require("./routes/authRoutes.js");
const histostainRoutes = require("./routes/histostainRoutes.js");

require("dotenv").config();
connectDB();

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Hello from API" });
});

app.use("/api/auth", authRoutes);
app.use("/api/requests", histostainRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on PORT: ", PORT);
});
