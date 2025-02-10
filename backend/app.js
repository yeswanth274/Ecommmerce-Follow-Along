const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
const ErrorHandler = require("./utils/ErrorHandler");
const errorMiddleware = require("./middleware/error");

// Initialize Express app
const app = express();

// Middleware setup
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(fileUpload());
app.use("/", express.static("uploads"));

// Load environment variables (only in development mode)
if (process.env.NODE_ENV !== "PRODUCTION") {
    dotenv.config({ path: "backend/config/.env" });
}

// Import routes
const user = require("./controller/user");
app.use("/api/v2/user", user);

// ✅ Add this to fix "Cannot GET /"
app.get("/", (req, res) => {
    res.send("Server is running!");
});

// Example route to test ErrorHandler
app.get("/error-test", (req, res, next) => {
    next(new ErrorHandler("This is a test error", 400));
});

// Error Handling Middleware (Must be at the end)
app.use(errorMiddleware);

module.exports = app;