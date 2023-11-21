const mongoose = require('mongoose');

const donationSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a donation name'],
  },
  image: {
    type: String,
  },
  description: {
    type: String,
    required: [true, 'Please provide a donation description'],
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const Donation = mongoose.model('donation', donationSchema);
module.exports = Donation;
