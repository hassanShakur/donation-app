const Donation = require('../models/donation');

exports.getAllDonations = async (req, res) => {
  try {
    const donations = await Donation.find();
    res.status(200).json({
      status: 'success',
      results: donations.length,
      data: {
        donations,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getDonation = async (req, res) => {
  try {
    const donation = await Donation.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        donation,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.createDonation = async (req, res) => {
  const { name, image, description } = req.body;

  try {
    const newDonation = await Donation.create({
      name,
      image,
      description,
    });

    res.status(201).json({
      status: 'success',
      message: 'Donation created successfully',
      data: {
        donation: newDonation,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};
