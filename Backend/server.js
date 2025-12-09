const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/", authRoutes);

app.listen(3050,'10.118.95.234', () =>{
    console.log("Server running on port 3050");
});
