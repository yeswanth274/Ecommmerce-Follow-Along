const express = require("express");
const path = require("path");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const User = require("../model/User");
const ErrorHandler = require("../utils/ErrorHandler");
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/sendMail");

const multer = require("multer");

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Ensure this folder exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

const router = express.Router();

// Create user
router.post(
  "/create-user",
  upload.single("file"),
  async (req, res, next) => {
    try {
      console.log("Creating user...");

      const { name, email, password } = req.body;
      const userEmail = await User.findOne({ email });

      if (userEmail) {
        if (req.file) {
          const filepath = path.join(__dirname, "../uploads", req.file.filename);
          try {
            fs.unlinkSync(filepath);
          } catch (err) {
            console.log("Error removing file:", err);
            return res.status(500).json({ message: "Error removing file" });
          }
        }
        return next(new ErrorHandler("User already exists", 400));
      }

      let fileUrl = "";
      if (req.file) {
        fileUrl = path.join("uploads", req.file.filename);
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      console.log("At Create", "Password: ", password, "Hash: ", hashedPassword);

      const user = await User.create({
        name,
        email,
        password: hashedPassword,
        avatar: {
          public_id: req.file?.filename || "",
          url: fileUrl,
        },
      });

      console.log(user);
      res.status(201).json({ success: true, user });

    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;