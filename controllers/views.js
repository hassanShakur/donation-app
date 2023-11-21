exports.getIndex = (req, res) => {
  const user = req.currentUser;
  res.render('home', {
    title: 'Home',
    user,
  });
};

exports.getLogin = (_, res) => {
  res.render('login', {
    title: 'Login',
  });
};

exports.getRegister = (_, res) => {
  res.render('register', {
    title: 'Register',
  });
};

exports.getDashboard = (_, res) => {
  res.render('dashboard');
};

exports.getProfile = (req, res) => {
  const user = req.currentUser;
  res.render('index', {
    title: 'Profile',
    user,
  });
};
