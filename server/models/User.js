const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minlength: 4,
    required: true,
  },
  role: {
    type: String,
    default: 'user',
    required: true,
  },
});

const User = mongoose.model('user', userSchema);
module.exports = User;
