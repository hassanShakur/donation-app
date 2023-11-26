const slugify = require('slugify');
const mongoose = require('mongoose');

const donationSchema = mongoose.Schema(
  {
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
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Donation must belong to a user'],
    },
    slug: String,
    isAssigned: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      required: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

donationSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: 'fname lname',
  });
  next();
});

donationSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Donation = mongoose.model('donation', donationSchema);
module.exports = Donation;
