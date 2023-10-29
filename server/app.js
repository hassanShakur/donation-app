const express = require('express');
const setupApp = require('./appSetup');
const cookieParser = require('cookie-parser');
const authRouter = require('./routers/auth');
const viewRouter = require('./routers/views');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.set('view engine', 'pug');

// serve static files from the public directory
app.use(express.static('public'));

setupApp(app);

app.use('/', viewRouter)
app.use('/api/auth', authRouter);

process.on('unhandledRejection', (err) => {
  console.log(`An error occurred: ${err.message}`);
  server.close(() => process.exit(1));
});

module.exports = app;
