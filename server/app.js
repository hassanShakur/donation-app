const express = require('express');
const setupApp = require('./appSetup');
const cookieParser = require('cookie-parser');
const authRouter = require('./routers/auth');
const viewsRouter = require('./routers/views');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.set('view engine', 'pug');

// serve static files from the public directory
app.use(express.static('public'));

setupApp(app);

app.use('/api/auth', authRouter);
app.use('/', viewsRouter);

// app.get('/', (_, res) => {
//   res.render('index');
// });

// app.get('/login', (_, res) => {
//   res.render('login');
// });

// app.get('/register', (_, res) => {
//   res.render('register');
// });

// app.get('/dashboard', (_, res) => {
//   res.render('dashboard');
// });

// app.get('/profile', (_, res) => {
//   res.render('profile');
// });

// app.get('/logout', (_, res) => {
//   res.cookie('jwt', '', { maxAge: 1 });
//   res.redirect('/login');
// });

process.on('unhandledRejection', (err) => {
  console.log(`An error occurred: ${err.message}`);
  server.close(() => process.exit(1));
});

module.exports = app;
