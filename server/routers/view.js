const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth');

router.get('/login', authController.getLogin);
router.get('/register', authController.getRegister);
router.get('/dashboard', authController.getDashboard);
router.get('/profile', authController.getProfile);
router.get('/logout', authController.getLogout);
