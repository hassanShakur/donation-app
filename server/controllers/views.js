exports.getIndex = (_, res) => {
  res.render('index');
};

exports.getLogin = (_, res) => {
  res.render('login');
};

exports.getRegister = (_, res) => {
  res.render('register');
};

exports.getDashboard = (_, res) => {
  res.render('dashboard');
};

exports.getProfile = (_, res) => {
  res.render('profile');
};

exports.getLogout = (_, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.redirect('/login');
};
