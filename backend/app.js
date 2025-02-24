const express = require('express');
const ErrorHandler = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();

// Config
if (process.env.NODE_ENV !== 'PRODUCTION') {
    dotenv.config({ path: "backend/config/.env" });
}

app.use(express.json());
app.use(cookieParser());
app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// Import Routes
const user = require("./controller/user");
const product = require("./controller/product");  // Added product route

app.use("/api/v2/user", user);
app.use("/api/v2/product", product);  // Added product route

// Error Handling Middleware
app.use(ErrorHandler);

module.exports = app;