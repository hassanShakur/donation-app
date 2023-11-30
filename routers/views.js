const express = require('express');
const router = express.Router();

const viewsController = require('../controllers/views');
const authController = require('../controllers/auth');
const organizationController = require('../controllers/organizations');

router.use(authController.isLoggedIn);

router.get('/login', viewsController.getLogin);
router.get('/register', viewsController.getRegister);

router.get('/', viewsController.getIndex);

router.use(authController.protect);

router.get('/home', viewsController.getHome);
router.get('/dashboard', viewsController.getDashboard);
router.get('/profile', viewsController.getProfile);
router.get(
  '/admin/dashboard',
  authController.restrictTo('admin'),
  viewsController.getAdminDashboard
);
router.get('/donations/me', viewsController.getMyDonations);

router.get('/donations/:slug', viewsController.getDonation);
router.get(
  '/donations',
  authController.restrictTo('admin'),
  viewsController.getDonations
);

router.get('/donate', viewsController.getCreateDonation);

router.get(
  '/organizations/create',
  authController.restrictTo('admin'),
  viewsController.getCreateOrganization
);

router.get('/organizations', viewsController.getOrganizations);
router.get('/organizations/:slug', viewsController.getOrganization);

router.get(
  '/users',
  authController.restrictTo('admin'),
  viewsController.getUsers
);

module.exports = router;
