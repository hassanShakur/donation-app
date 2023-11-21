const express = require('express');
const router = express.Router();

const viewsController = require('../controllers/views');
const authController = require('../controllers/auth');

router.use(authController.isLoggedIn);

router.get('/login', viewsController.getLogin);
router.get('/register', viewsController.getRegister);

router.get('/', viewsController.getIndex);

router.use(authController.protect);

router.get('/home', viewsController.getHome);
router.get('/dashboard', viewsController.getDashboard);
router.get('/profile', viewsController.getProfile);
router.get('/donations/:slug', viewsController.getDonation);

module.exports = router;
