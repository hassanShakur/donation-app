const express = require('express');
const router = express.Router();

const { register, login, logout } = require('../controllers/auth');

router.route('/register').post(register);
router.route('/login').post(login);
router.get('/logout', logout);

module.exports = router;
