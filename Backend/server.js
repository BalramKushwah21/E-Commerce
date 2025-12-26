require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");

const app = express();



// temprary
app.post("/__debug__", (req, res) => {
  res.json({ message: "DEBUG ROUTE HIT" });
});


app.use(cors({
  origin: "*"
}));
app.use(express.json());



mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
