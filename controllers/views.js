const User = require('../models/User');
const Donation = require('../models/Donation');

exports.getIndex = async (req, res) => {
  const user = req.user;
  const myDonations = await Donation.find({ user: req.user.id });

  res.render('home', {
    title: 'Home',
    user,
    donations: myDonations,
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
  res.render('index', {
    title: 'Profile',
    user,
  });
};
