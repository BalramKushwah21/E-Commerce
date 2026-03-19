const express = require("express");

const app = express();
const PORT = 3000;


app.use(express.json());
app.use(express.static("public"));

app.post("/send-message", (req, res) => {
    const data = req.body;   // frontend se data aayega

    console.log("Form Data:", data);

    res.send("Message received!");
});

app.listen(PORT, () => {
    console.log("Server running on http://localhost:3000");
});