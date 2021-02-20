const express = require('express');
//const nodemailer = require('nodemailer');
const { body, validationResult } = require('express-validator');

const contactService = require('../services/contact');

const router = express.Router();

// @route   POST api/email
// @desc    Send an email
// @access  Public
router.post(
  '/',
  [
    body('name', 'Missing a valid required property name').not().isEmpty(),
    body('email', 'Missing a valid required property email').isEmail(),
    body('subject', 'Missing a valid required property subject')
      .not()
      .isEmpty(),
    body(
      'message',
      'Missing a valid required property message of 10 or more characters'
    ).isLength({
      min: 10,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, name, subject, message } = req.body;

    try {
      await contactService.sendContactEmail({ name, email, subject, message });
      res.json({ status: 'Email Sent' });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Server Error' });
    }
  }
);

module.exports = router;
