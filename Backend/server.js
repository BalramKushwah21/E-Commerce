require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");


const app = express();
app.use("/", authRoutes);




app.use(cors({
  origin: "*"
}));
app.use(express.json());



mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 3000;
app.post("/__proof__", (req, res) => {
  res.json({ message: "PROOF ROUTE WORKS" });
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
