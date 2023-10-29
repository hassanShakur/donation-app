const app = require('./app');
const mongoose = require('mongoose');

const DB = process.env.DB_LOCAL;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database connection successful!');
  })
  .catch((err) => {
    console.log(err);
  });

const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
