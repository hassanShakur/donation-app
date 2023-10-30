const express = require('express');
const router = express.Router();

const viewsController = require('../controllers/views');

router.get('/', viewsController.getIndex);
router.get('/login', viewsController.getLogin);
router.get('/signup', viewsController.getRegister);
router.get('/dashboard', viewsController.getDashboard);
router.get('/profile', viewsController.getProfile);
router.get('/logout', viewsController.getLogout);

module.exports = router;
