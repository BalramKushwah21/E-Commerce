
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const env = require("dotenv").config();

const app = express();

app.use(cors({origin: "*"}));

app.use(express.json());

app.use("/", authRoutes);


const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/authDB";
mongoose.connect(mongoUri)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;
app.post("/__proof__", (req, res) => {
  res.json({ message: "PROOF ROUTE WORKS" });
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
