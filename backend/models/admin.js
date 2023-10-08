const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Ensure usernames are unique
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email addresses are unique
  },
  isAdmin: {
    type: Boolean,
    default: true, // Set to true for admin users
  },
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
