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
    organization: {
      type: mongoose.Schema.ObjectId,
      ref: 'Organization',
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
  // populate with user and organization
  this.populate({
    path: 'user',
    select: 'fname lname role',
  }).populate({
    path: 'organization',
    select: 'name',
  });
  next();
});

donationSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Donation = mongoose.model('Donation', donationSchema);
module.exports = Donation;
