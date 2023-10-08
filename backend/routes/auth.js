const express = require("express");
// requiring the User Model
const User = require("../models/user");
// requiring the bcrypt
const bcrypt = require("bcrypt");
// requiring the jsonwebtoken
const jwt = require('jsonwebtoken');
// requiring the custom middleware from the middleware
const requireLogin = require("../middleware/requireLogin");
// For the .env file
require('dotenv').config();

const router = express.Router();

// SignUp Route for the users
router.post("/signup", (req, res) => {
  // destructuring the objects items coming from the form
  const { name, userName, email, password, pic } = req.body;
  // checking if the data coming from the form is not empty
  if (!name || !userName || !email || !password) {
    return res.status(422).json({ error: "Please add all the Details" });
  }

  //   finding the user already exist or not in the database
  User.findOne({ email: email })
    .then((existingUser) => {
      if (existingUser) {
        // user already exists
        return res.status(422).json({ error: "User Already Exists" });
      }

      // checking if the user is already registerd in the dataBase
      // if the user is already registered then do not register
      // else first encrypt the password

      // encrypting the password
      bcrypt
        .hash(password, 12) // 12 is the string which will be added to the password
        //   returns a promise
        .then((hashedPassword) => {
          const user = new User({
            name,
            userName,
            email,
            password: hashedPassword, // Store the hashed password in the database
            pic,
          });

          //   saving the data to the dataBase
          user
            .save()
            .then(() => {
              res.status(200).json({ message: "Registration Successful" });
            })
            .catch((error) => {
              console.error(error);
              res.status(500).json({ error: "Registration failed" });
            });
        })
        .catch((error) => {
          console.error(error);
          res.status(500).json({ error: "Internal Server Error" });
        });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

// Login route for the user
router.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    // Check if email and password are provided
    if (!email || !password) {
      return res.status(422).json({ error: 'Please provide both email and password' });
    }
  
    // Find the user by email
    User.findOne({ email })
      .then((user) => {
        if (!user) {
          return res.status(422).json({ error: 'Invalid Email or Password' });
        }
  
        // Compare the provided password with the hashed password in the database
        bcrypt.compare(password, user.password)
          .then((doMatch) => {
            // only return true or false
            // when true
            if (doMatch) {
              // Generate a JSON Web Token (JWT) for the authenticated user
              const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
              
              // Include user data and token in the response
              res.json({ user, token });
            } 
            // when false
            else {
              return res.status(422).json({ error: 'Invalid Email or Password' });
            }
          })
          .catch((error) => {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
          });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  });
  
// the below router should not open until someone logins 
router.get('/protected' , requireLogin , (req , res) => {
    res.json(req.user);   // req.user is created at requireLogin
    // will send token and the token will get verify here
})

module.exports = router;