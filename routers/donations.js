const express = require('express');
const donationsController = require('../controllers/donations');
const authController = require('../controllers/auth');

const router = express.Router();

router
  .route('/')
  .get(donationsController.getAllDonations)
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    donationsController.createDonation
  );

router
  .route('/:id')
  .get(donationsController.getDonation)
  .patch(
    authController.protect,
    authController.restrictTo('admin'),
    donationsController.updateDonation
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    donationsController.deleteDonation
  );

module.exports = router;
