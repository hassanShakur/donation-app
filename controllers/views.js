const Donation = require('../models/Donation');

exports.getIndex = async (req, res) => {
  const donations = await Donation.find();

  res.render('index', {
    title: 'Donation App',
    donations,
  });
};

exports.getHome = async (req, res) => {
  const user = req.user;
  const myDonations = await Donation.find({ user: req.user.id });
  const allDonations = await Donation.find();

  res.render('home', {
    title: 'Home',
    user,
    donations: user.role === 'admin' ? allDonations : myDonations,
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

exports.getDonation = async (req, res) => {
  const donation = await Donation.findOne({ slug: req.params.slug });

  res.render('donation', {
    title: donation.name,
    donation,
  });
};

exports.getCreateOrganization = (req, res) => {
  res.render('createOrganization', {
    title: 'Create Organization',
  });
};
