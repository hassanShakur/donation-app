const Donation = require('../models/Donation');
const Organization = require('../models/Organization');
const User = require('../models/User');

exports.getIndex = async (req, res) => {
  try {
    const donations = await Donation.find();

    res.render('index', {
      title: 'Donation App',
      donations,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getHome = async (req, res) => {
  try {
    const user = req.user;
    // const myDonations = await Donation.find({ user: req.user.id });
    const allDonations = await Donation.find();

    res.render('home', {
      title: 'Home',
      user,
      // donations: user.role === 'admin' ? allDonations : myDonations,
      donations: allDonations,
    });
  } catch (error) {
    console.log(error);
  }
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
  try {
    const admin = await User.findById(req.user.id);

    res.render('admin', {
      title: 'Admin Dashboard',
      admin,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getDonation = async (req, res) => {
  try {
    const donation = await Donation.findOne({
      slug: req.params.slug,
    });
    const organizations = await Organization.find();

    res.render('donation', {
      title: donation.name,
      donation,
      organizations,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getDonations = async (req, res) => {
  try {
    const donations = await Donation.find();

    res.render('donations', {
      title: 'Donations',
      donations,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getMyDonations = async (req, res) => {
  try {
    const donations = await Donation.find({ user: req.user.id });

    res.render('donations', {
      title: 'My Donations',
      donations,
    });
  } catch (error) {
    console.log(error);
  }
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
  try {
    const organizations = await Organization.find();

    res.render('organizations', {
      title: 'Organizations',
      organizations,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getOrganization = async (req, res) => {
  try {
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
  } catch (error) {
    console.log(error);
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.render('users', {
      title: 'Users',
      users,
    });
  } catch (error) {
    console.log(error);
  }
};
