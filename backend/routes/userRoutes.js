const express = require("express");
const multer = require("multer");
const { createUser, loginUser } = require("../controller/user");

const router = express.Router();

// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});
const upload = multer({ storage });

// Routes
router.post("/create-user", upload.single("file"), createUser);
router.post("/login", loginUser);

module.exports = router;