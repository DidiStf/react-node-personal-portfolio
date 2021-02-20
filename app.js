const cors = require('cors');
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const morgan = require('morgan');
const colors = require('colors');

const contact = require('./routes/contact');

dotenv.config();

const ENV = process.env.NODE_ENV;

const app = express();

// Init Middleware
app.use(express.json());
app.use(cors());

// Define Routes
app.use('/api/contact', contact);

// Serve static assets in production
if (ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

module.exports = app;
