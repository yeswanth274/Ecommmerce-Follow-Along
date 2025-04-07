const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// MongoDB Connection URL
const MONGO_URI = "mongodb://127.0.0.1:27017/mydatabase"; // Using 127.0.0.1 for better reliability

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => {
    console.error("MongoDB Connection Error:", err);
    process.exit(1); // Exit the process if connection fails
  });

// Basic Route
app.get("/", (req, res) => {
  res.send("Hello yeswanth, MongoDB is connected!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
