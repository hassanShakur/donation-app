const express = require('express');
const router = express.Router();

const viewsController = require('../controllers/views');
const authController = require('../controllers/auth');
const organizationController = require('../controllers/organizations');
const usersController = require('../controllers/users');

router.use(authController.isLoggedIn);
router.use(authController.protect);
router.use(authController.restrictTo('admin'));

router.get('/', usersController.getUsers);
router.get('/:slug', usersController.getUser);

module.exports = router;
