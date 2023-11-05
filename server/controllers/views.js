exports.getIndex = (_, res) => {
  res.render('index');
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
  res.render('home', {
    title: 'Profile',
    user,
  });
};

exports.getLogout = (_, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.redirect('/login');
};
