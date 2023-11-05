const mongoose = require('mongoose');

const donationSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const Donation = mongoose.model('donation', donationSchema);
module.exports = Donation;
