const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res, next) => {
  const { fname, lname, email, password } = req.body;

  if (!fname || !lname || !email || !password) {
    return res.status(400).json({
      status: 'error',
      message: 'Please provide fname, lname, email and password!',
    });
  }

  if (password.length < 4) {
    return res.status(400).json({
      status: 'error',
      message: 'Password cannot be less than 4 chars!',
    });
  }

  try {
    const hashedPass = await bcrypt.hash(password, 12);
    const user = await User.create({
      fname,
      lname,
      email,
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
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      status: 'error',
      message: 'Please provide email and password!',
    });
  }

  try {
    const user = await User.findOne({ email });

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
        message: 'Invalid email or password!',
      });
    }

    const maxAge = process.env.JWT_MAX_AGE; // in sec
    const jwtSecret = process.env.JWT_SECRET;
    const { _id, role } = user;

    const token = jwt.sign(
      { id: _id, email: user.email, role },
      jwtSecret,
      {
        expiresIn: maxAge,
      }
    );

    req.currentUser = user;

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
      message: 'User login failed! Please try again!',
      error: err.message,
    });
  }
};

exports.adminAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    return res.status(401).json({
      status: 'error',
      message: 'Please login to continue!!',
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
    if (err) {
      return res.status(401).json({
        status: 'error',
        message: 'Please login to continue!!',
      });
    }

    if (decodedToken.role !== 'admin') {
      return res.status(401).json({
        status: 'error',
        message: 'Unauthorized!',
      });
    }

    next();
  });
};

exports.userAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    return res.status(401).json({
      status: 'error',
      message: 'Please login to continue!!',
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
    if (err || decodedToken.role !== 'user') {
      return res.status(401).json({
        status: 'error',
        message: 'Please login to continue!!',
      });
    }

    next();
  });
};

exports.protect = async (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    return res.status(401).json({
      status: 'error',
      message: 'Please login to continue!!',
    });
  }

  jwt.verify(
    token,
    process.env.JWT_SECRET,
    async (err, decodedToken) => {
      if (err) {
        return res.status(401).json({
          status: 'error',
          message:
            'You are not logged in!, Please login to get access.',
        });
      }

      const user = await User.findById(decodedToken.id);

      if (!user) {
        return res.status(401).json({
          status: 'error',
          message: 'Token owner does not exist!',
        });
      }

      // req.user = user;

      next();
    }
  );
};

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.currentUser.role)) {
      return res.status(403).json({
        status: 'error',
        message: 'You do not have permission to perform this action!',
      });
    }

    next();
  };
};

// Only for rendered pages, no errors!
exports.isLoggedIn = async (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) return next();

  jwt.verify(
    token,
    process.env.JWT_SECRET,
    async (err, decodedToken) => {
      if (err) return next();

      const user = await User.findById(decodedToken.id);

      if (!user) return next();

      res.locals.loggedUser = user;

      return next();
    }
  );
};

exports.logout = (req, res, next) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.status(200).json({
    status: 'success',
    message: 'Logout successful!',
  });
};
