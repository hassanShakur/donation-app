const express = require('express');
const router = express.Router();

const viewsController = require('../controllers/views');
const authController = require('../controllers/auth');

router.use(authController.isLoggedIn);

router.get('/login', viewsController.getLogin);
router.get('/register', viewsController.getRegister);

router.use(authController.protect);

router.get('/', viewsController.getIndex);
router.get('/dashboard', viewsController.getDashboard);
router.get('/profile', viewsController.getProfile);

module.exports = router;
