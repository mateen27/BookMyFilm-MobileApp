// logic for the registration endpoint

const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, mobile, password, pic } = req.body;

  // checking if the details are sent empty throw an error
  if (!name || !email || !password || !mobile) {
    res.status(400);
    throw new Error("Please Enter all the fields!");
  }

  // checking if the user does not exist from earlier
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists ");
  }

  // else create a newUser
  const user = await User.create({
    name,
    email,
    mobile,
    password,
    pic,
  });

  // user created successfully
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      mobile: user.mobile,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to create a User");
  }
});

// logic for signin user endpoint

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // checking if the details are sent empty throw an error
  if (!email || !password) {
    res.status(400);
    throw new Error("Please Enter all the fields!");
  }

  // finding the user by email in database
  const user = await User.findOne({ email });

  // if user is found in database with same email
  if ( user && (await user.matchPassword(password))) {
    res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        pic: user.pic,
        token: generateToken(user._id),
    })
  }  else {
    res.status(401);
    throw new Error("Invalid Email or Password!");
  }
});

module.exports = { registerUser , authUser };
