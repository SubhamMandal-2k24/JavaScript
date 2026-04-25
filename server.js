const express = require("express");
const app = express();

// route
app.get("/", (req, res) => {
    res.send("Server is running 🚀");
});

// start server
app.listen(3000, () => {
    console.log("Server started on port 3000");
});