const express = require('express');
const setupApp = require('./appSetup');
const cookieParser = require('cookie-parser')
const authRouter = require('./routers/auth');

const app = express();

app.use(express.json());
app.use(cookieParser())

setupApp(app);

app.use('/api/auth', authRouter);

process.on('unhandledRejection', (err) => {
  console.log(`An error occurred: ${err.message}`);
  server.close(() => process.exit(1));
});

module.exports = app;
