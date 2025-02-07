const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const ErrorHandler = require("./utils/ErrorHandler");
const errorMiddleware = require("./middleware/error");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// Example route to test ErrorHandler
app.get("/error-test", (req, res, next) => {
    next(new ErrorHandler("This is a test error", 400));
});

// Middleware for handling errors (must be at the end)
app.use(errorMiddleware);

module.exports = app;