const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      status: 'error',
      message: 'Please provide username and password!',
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      status: 'error',
      message: 'Password cannot be less than 6 chars!',
    });
  }

  try {
    const hashedPass = bcrypt.hash(password, 12);
    const user = await User.create({
      username,
      password: hashedPass,
    });

    res.status(201).json({
      status: 'success',
      message: 'User created successfuly!',
      user,
    });
  } catch (err) {
    res.status(401).json({
      status: 'error',
      message: 'User creation failed!',
      error: err.message,
    });
  }
};

exports.login = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      status: 'error',
      message: 'Please provide username and password!',
    });
  }

  try {
    const user = User.findOne({ username, password });

    if (!user) {
      return res.status(401).json({
        status: 'failed',
        message: 'User not found!',
      });
    }

    const validPass = await bcrypt.compare(password, user.password);

    if (!validPass) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid username or password!',
        user,
      });
    }

    const maxAge = process.env.JWT_MAX_AGE; // in sec
    const jwtSecret = process.env.JWT_SECRET;
    const { _id, username, role } = user;

    const token = jwt.sign({ id: _id, username, role }, jwtSecret, {
      expiresIn: maxAge,
    });

    res.cookie('jwt', token, {
      httpOnly: true,
      maxAge: maxAge * 1000, // in ms
    });

    res.status(200).json({
      status: 'success',
      message: 'Login successful!',
      user,
    });
  } catch (err) {
    res.status(401).json({
      status: 'error',
      message: 'User creation failed!',
      error: err.message,
    });
  }
};
