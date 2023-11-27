const Donation = require('../models/Donation');
const Organization = require('../models/Organization');

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

exports.getMyDonations = async (req, res) => {
  try {
    const donations = await Donation.find({ user: req.user.id });

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
    // populate with organization

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
      user: req.user.id,
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

exports.deleteDonation = async (req, res) => {
  try {
    await Donation.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      message: 'Donation deleted successfully',
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.assignDonation = async (req, res) => {
  try {
    const donation = await Donation.findById(req.params.id);
    const organization = await Organization.findById(
      req.body.organizationId
    );

    if (!donation || !organization) {
      throw new Error('Donation or organization not found');
    }

    donation.organization = organization._id;
    donation.isAssigned = true;
    organization.assignedDonations.push(donation._id);
    await donation.save();
    await organization.save();

    res.status(200).json({
      status: 'success',
      message: 'Donation assigned successfully',
      data: {
        donation,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};
