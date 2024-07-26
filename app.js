require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use('/api', routes);

sequelize.sync()
  .then(() => {
    console.log('Database connected!');
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch(err => {
    console.log('Error: ' + err);
  });
