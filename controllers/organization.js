const Organization = require('../models/Organization');
const Donation = require('../models/Donation');

exports.getOrganizations = async (req, res) => {
  const organizations = await Organization.find();

  res.render('organizations', {
    title: 'Organizations',
    organizations,
  });
};

exports.getOrganization = async (req, res) => {
  const organization = await Organization.findOne({
    slug: req.params.slug,
  });
  const donations = await Donation.find({
    organization: organization.id,
  });

  res.render('organization', {
    title: organization.name,
    organization,
    donations,
  });
};

exports.postCreateOrganization = async (req, res) => {
  const organization = await Organization.create(req.body);

  res.redirect(`/organizations/${organization.slug}`);
};
