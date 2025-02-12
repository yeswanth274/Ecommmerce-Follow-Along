const app = require("./app");

// Handling uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to an uncaught exception");
});

// Load environment variables
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "config/.env" });
}

// Set a default port if process.env.PORT is undefined
const PORT = process.env.PORT || 8000;

// Default route to prevent "Cannot GET /" error
app.get("/", (req, res) => {
    res.send("Server is running...");
});

// Create server
const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to an unhandled promise rejection");

    server.close(() => {
        process.exit(1);
    });
});