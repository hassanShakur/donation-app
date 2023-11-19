const mongoose = require('mongoose');

const donationSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a donation name'],
  },
  image: {
    type: String,
  },
  amount: {
    type: Number,
    required: [true, 'Please provide a donation amount'],
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const Donation = mongoose.model('donation', donationSchema);
module.exports = Donation;
