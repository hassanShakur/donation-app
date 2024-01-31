const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    fname: {
      type: String,
      required: [true, 'Please provide a first name'],
    },
    lname: {
      type: String,
      required: [true, 'Please provide a last name'],
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      unique: true,
    },
    password: {
      type: String,
      minlength: [6, 'Password must be at least 6 characters'],
      required: [true, 'Please provide a password'],
    },
    role: {
      type: String,
      default: 'user',
      required: true,
      enum: ['user', 'admin', 'org'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const User = mongoose.model('User', userSchema);
module.exports = User;
