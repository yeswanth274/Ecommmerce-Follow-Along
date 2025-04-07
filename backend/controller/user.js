const express = require("express");
const path = require("path");
const fs =require("fs");
const User = require("../model/user");
const router = express.Router();
const { upload } = require("../multer");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const bcrypt =require("bcryptjs");
require("dotenv").config();


// create user
router.post("/create-user", upload.single("file"), catchAsyncErrors(async (req, res, next) => {
  console.log("create user");
  const { name, email, password } = req.body;

  const userEmail = await User.findOne({ email });

  if (userEmail) {
    if(req.file){
        const filepath = path.join(__dirname,"../uploads",req.file.filename);
        try{
            fs.unlinkSync(filepath);
        }
        catch(err){
            console.log("Error removing file:",err);
            return res.status(500).json({message: "Error removing file"});
        }
    }

    return next(new ErrorHandler("User already exists",400));

    }
    let fileUrl = "";

    if(req.file){
        fileUrl=path.join("uploads",req.file.filename);
    }

    const hashedPassword = await bcrypt.hash(password,10);
    console.log("At Create ","Password:", password,"Hash: ",hashedPassword);
    
    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id:req.file?.filename || "",
            url: fileUrl,
        },
    });
console.log(user);

res.status(201).json({ success:true,user});
}));


router.post("/login-user",catchAsyncErrors(async(req, res, next)=>{
    console.log("Logging...");
    let{email,password} = req.body;
    email = email
    password = password;

    if(!email || !password){
        return next(new ErrorHandler("Please provide email and password",400));
    }
    const user_authen = await User.findOne({email}).select("+password");
    console.log(user_authen);
    if(!user_authen){
        console.log("No user found")
        return next(new ErrorHandler("Invalid email or password , No such E-mail found",401));
    }
    const isPasswordMatched = await bcrypt.compare(password, user_authen.password);
    console.log("Password Matched Result: ",isPasswordMatched);
    console.log("At Auth - password", password, "Hash: ", user_authen.password);
    if(!isPasswordMatched){
        console.log("Password not matched")
        return next(new ErrorHandler("Authencation failed,Invalid password",401));

    }
    res.status(200).json({
        success:true,
        message:"Login successful",
        user:{
            id:user_authen.id,
            email:user_authen.email,
            name:user_authen.name,
        },
    });

}));

router.get("/profile", catchAsyncErrors( async (req, res, next)=>{
    const {email} = req.query

    if (!email) {
        return next(new ErrorHandler("Please provide email" , 400));
    }
    const user = await User.findOne({email});
    if(!user){
        return next (new ErrorHandler("User not found", 400))
    }
    res.status(200).json({
        success:true,
        user:{
            name:user.name,
            email:user.email,
            phone:user.phone,
            avatarURL:user.avatar.url
        },
        addresses: user.addresses
    });
}))

// Add address
router.post('/add-address', catchAsyncErrors(async (req, res, next) => {
    const { email, country, city, address1, address2, zipcode, addresstype } = req.body;

    if (!email) {
        return next(new ErrorHandler("Please provide an email", 400));
    }

    const user = await User.findOne({ email });
    if (!user) {
        return next(new ErrorHandler("User not found", 404));
    }

    user.addresses.push({
        country,
        city,
        address1,
        address2,
        zipCode: zipcode,
        addressType: addresstype
    });

    await user.save();

    res.status(201).json({
        success: true,
        message: "Address added successfully",
        addresses: user.addresses
    });
}));

router.get("/addresses", catchAsyncErrors(async (req, res, next) => {
    const { email } = req.query;

    if (!email) {
        return next(new ErrorHandler("Please provide an email", 400));
    }
    const user = await User.findOne({ email });
    if (!user) {
        return next(new ErrorHandler("User not found", 404));
    }
    res.status(200).json({
        success: true,
        addresses: user.addresses
    });
}))

module.exports=router;