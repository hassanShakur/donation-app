const User = require('../models/User');

exports.register = async (req, res, next) => {
  const { username, password } = req.body;

  if (password.length < 6) {
    return res.status(400).json({
      status: 'error',
      message: 'Password cannot be less than 6 chars!',
    });
  }

  try {
    const user = await User.create({ username, password });

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
