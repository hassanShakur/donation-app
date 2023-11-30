const express = require('express');
const donationsController = require('../controllers/donations');
const authController = require('../controllers/auth');

const router = express.Router();

router
  .route('/')
  .get(donationsController.getAllDonations)
  .post(
    authController.protect,
    donationsController.createDonation
  );

router
  .route('/:id')
  .get(donationsController.getDonation)
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    donationsController.deleteDonation
  );

router.patch(
  '/:id/assignDonation',
  authController.protect,
  authController.restrictTo('admin'),
  donationsController.assignDonation
);

module.exports = router;
