const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();
connectDB();

app.use(cors({
  origin: ["https://balramkushwah21.github.io/E-Commerce/", "http://localhost:27017"],// your actual GitHub Pages URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());

app.use("/", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running:", PORT));





