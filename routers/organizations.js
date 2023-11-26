const express = require('express');
const router = express.Router();

const viewsController = require('../controllers/views');
const authController = require('../controllers/auth');
const organizationController = require('../controllers/organization');

router.use(authController.isLoggedIn);
router.use(authController.protect);
router.use(authController.restrictTo('admin'));

router
  .route('/')
  .get(organizationController.getOrganizations)
  .post(organizationController.createOrganization);
router.get('/:slug', organizationController.getOrganization);

module.exports = router;
