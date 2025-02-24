const multer = require('multer');

// Configure multer storage for profile images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Define your upload folder
  },

  filename: function(req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 109); // Corrected 'apply' method usage
    const filename = file.originalname.split(".")[0]; // Fixed filename assignment
    cb(null, filename + "-" + uniqueSuffix + ".png"); // Define the filename
  },
});

// Configure multer storage for product images
const pstorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'products/'); // Define your upload folder
  },

  filename: function(req, file, cb) {
    console.log(req.body); // Logging request body for debugging
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9); // Corrected random number generation
    const filename = file.originalname.split(".")[0]; // Fixed filename assignment
    cb(null, filename + "-" + uniqueSuffix + ".png"); // Define the filename
  },
});

// Initialize upload object for profile images
exports.upload = multer({ storage: storage });

// Initialize upload object for product images
exports.pupload = multer({ storage: pstorage });