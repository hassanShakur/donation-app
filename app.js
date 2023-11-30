const express = require('express');
const setupApp = require('./appSetup');
const cookieParser = require('cookie-parser');
const authRouter = require('./routers/auth');
const usersRouter = require('./routers/users');
const viewsRouter = require('./routers/views');
const donationsRouter = require('./routers/donations');
const organizationsRouter = require('./routers/organizations');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.set('view engine', 'pug');

app.use(express.static('public'));

setupApp(app);

// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.cookies);
  console.log(`\nRequest received at ${req.requestTime}\n`);
  next();
});

// 

app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/donations', donationsRouter);
app.use('/api/organizations', organizationsRouter);
app.use('/', viewsRouter);

process.on('unhandledRejection', (err) => {
  console.log(`An error occurred: ${err.message}`);
  console.log(
    'Shutting down server due to unhandled promise rejection...'
  );
  process.exit(1);
});

module.exports = app;
