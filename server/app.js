const express = require('express')
const setupApp = require('./appSetup')

const app = express()
setupApp(app)

process.on('unhandledRejection', (err) => {
  console.log(`An error occurred: ${err.message}`);
  server.close(() => process.exit(1));
});

module.exports = app;

