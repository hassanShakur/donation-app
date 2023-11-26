const mongoose = require('mongoose');

const organizationSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a organization name'],
    },
    description: {
      type: String,
      required: [true, 'Please provide a organization description'],
    },
    assignedDonations: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Donation',
      },
    ],
    slug: String,
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

organizationSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Organization = mongoose.model(
  'organization',
  organizationSchema
);
module.exports = Organization;
