const Organization = require('../models/Organization');
const Donation = require('../models/Donation');

exports.getOrganizations = async (req, res) => {
  try {
    const organizations = await Organization.find();

    res.status(200).json({
      status: 'success',
      results: organizations.length,
      data: {
        organizations,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getOrganization = async (req, res) => {
  try {
    const organization = await Organization.findById(req.params.id);
    const donations = await Donation.find({ organization: organization.id });

    res.status(200).json({
      status: 'success',
      data: {
        organization,
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

exports.createOrganization = async (req, res) => {
  const { name, image, description } = req.body;

  try {
    const organization = await Organization.create({
      name,
      image,
      description,
    });

    res.status(201).json({
      status: 'success',
      message: 'Organization created successfuly!',
      organization,
    });
  } catch (err) {
    res.status(401).json({
      status: 'error',
      message: 'Organization creation failed!',
      error: err.message,
    });
  }
};
