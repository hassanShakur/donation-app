const express = require('express');
const setupApp = require('./appSetup');
const cookieParser = require('cookie-parser');
const authRouter = require('./routers/auth');
const viewsRouter = require('./routers/views');
const donationsRouter = require('./routers/donations');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.set('view engine', 'pug');

app.use(express.static('public'));

setupApp(app);

// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.cookies);
  next();
});

app.use('/api/auth', authRouter);
app.use('/api/donations', donationsRouter);
app.use('/', viewsRouter);

process.on('unhandledRejection', (err) => {
  console.log(`An error occurred: ${err.message}`);
  console.log(
    'Shutting down server due to unhandled promise rejection...'
  );
  process.exit(1);
});

module.exports = app;
