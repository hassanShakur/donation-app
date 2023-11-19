const express = require('express');
const router = express.Router();

const viewsController = require('../controllers/views');
const { protect } = require('../controllers/auth');

router.get('/login', viewsController.getLogin);
router.get('/register', viewsController.getRegister);

router.get('/', protect, viewsController.getIndex);
router.get('/dashboard', protect, viewsController.getDashboard);
router.get('/home', protect, viewsController.getProfile);
router.get('/logout', protect, viewsController.getLogout);

module.exports = router;
