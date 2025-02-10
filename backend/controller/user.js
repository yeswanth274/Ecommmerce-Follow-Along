const express = require("express");
const path = require("path");
const User = require("../model/user");
const router = express.Router();
const upload = require("../utils/multer");  // Fixed multer import
const ErrorHandler = require("../utils/ErrorHandler");

// create user
router.post("/create-user", upload.single("file"), async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const userEmail = await User.findOne({ email });
    if (userEmail) {
      return next(new ErrorHandler("User already exists", 400));
    }

    if (!req.file) {
      return next(new ErrorHandler("File upload failed", 400));
    }

    const filename = req.file.filename;
    const fileUrl = path.join("uploads", filename);

    const user = {
      name,
      email,
      password,
      avatar: fileUrl,
    };

    console.log(user);

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});

module.exports = router;

router.get("/", (req, res) => {
    res.status(200).json({ message: "User route is working!" });
});