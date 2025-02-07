const ErrorHandler = require("../utils/ErrorHandler");

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    // Ensure err is always an instance of ErrorHandler
    if (!(err instanceof ErrorHandler)) {
        err = new ErrorHandler(err.message, err.statusCode);
    }

    // Handle wrong MongoDB Object ID
    if (err.name === "CastError") {
        const message = `Resource not found. Invalid ${err.path}`;
        err = new ErrorHandler(message, 400);
    }

    // Handle duplicate key error (MongoDB)
    if (err.code === 11000) {
        const message = `Duplicate field value entered: ${Object.keys(err.keyValue)}`;
        err = new ErrorHandler(message, 400);
    }

    // Handle JSON Web Token Error
    if (err.name === "JsonWebTokenError") {
        const message = `Invalid Token. Please try again.`;
        err = new ErrorHandler(message, 400);
    }

    // Handle Expired JWT
    if (err.name === "TokenExpiredError") {
        const message = `Your session has expired. Please login again.`;
        err = new ErrorHandler(message, 400);
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};