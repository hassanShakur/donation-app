const Donation = require('../models/Donation');
const Organization = require('../models/Organization');
const User = require('../models/User');

exports.getIndex = async (req, res) => {
  const donations = await Donation.find();

  res.render('index', {
    title: 'Donation App',
    donations,
  });
};

exports.getHome = async (req, res) => {
  const user = req.user;
  // const myDonations = await Donation.find({ user: req.user.id });
  const allDonations = await Donation.find();

  res.render('home', {
    title: 'Home',
    user,
    // donations: user.role === 'admin' ? allDonations : myDonations,
    donations: allDonations,
  });
};

exports.getLogin = (_, res) => {
  res.render('login', {
    title: 'Login',
  });
};

exports.getRegister = (_, res) => {
  res.render('register', {
    title: 'Register',
  });
};

exports.getDashboard = (_, res) => {
  res.render('dashboard');
};

exports.getProfile = (req, res) => {
  const user = req.user;
  res.render('profile', {
    title: 'Profile',
    user,
  });
};

exports.getAdminDashboard = async (req, res) => {
  const admin = await User.findById(req.user.id);

  res.render('admin', {
    title: 'Admin Dashboard',
    admin,
  });
};

exports.getDonation = async (req, res) => {
  const donation = await Donation.findOne({ slug: req.params.slug });
  const organizations = await Organization.find();

  res.render('donation', {
    title: donation.name,
    donation,
    organizations,
  });
};

exports.getDonations = async (req, res) => {
  const donations = await Donation.find();

  res.render('donations', {
    title: 'Donations',
    donations,
  });
};

exports.getCreateDonation = async (req, res) => {
  res.render('createDonation', {
    title: 'Create Donation',
  });
};

exports.getCreateOrganization = (req, res) => {
  res.render('createOrganization', {
    title: 'Create Organization',
  });
};

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
    orgDonations: donations,
  });
};

exports.getUsers = async (req, res) => {
  const users = await User.find();

  res.render('users', {
    title: 'Users',
    users,
  });
};
