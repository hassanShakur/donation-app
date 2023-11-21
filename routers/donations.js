const express = require('express');
const donationsController = require('../controllers/donations');
const authController = require('../controllers/auth');

const router = express.Router();

router
  .route('/')
  .get(donationsController.getMyDonations)
  .post(
    authController.protect,
    donationsController.createDonation
  );

router
  .route('/:slug')
  .get(donationsController.getDonation)
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    donationsController.deleteDonation
  );

module.exports = router;
