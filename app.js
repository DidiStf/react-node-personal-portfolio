const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const colors = require('colors');
const dotenv = require('dotenv');

const contact = require('./routes/contact');

dotenv.config();

const app = express();

// Init Middleware
app.use(express.json());
app.use(cors());

// Define Routes
app.use('/api/contact', contact);

module.exports = app;
