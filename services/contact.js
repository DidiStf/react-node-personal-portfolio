const nodemailer = require('nodemailer');
const templateService = require('./template');

const contactEmail = () =>
  nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

const verifyMailerStatus = async () =>
  await contactEmail().verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Ready to Send');
    }
  });

const formatEmail = (contactData) => {
  const hostEmail = process.env.EMAIL;
  const template = templateService.generateTemplate(contactData);

  const mail = {
    from: contactData.name,
    to: hostEmail,
    subject: 'Contact Form Submit',
    html: template,
  };

  return mail;
};

exports.sendContactEmail = async (contactData) => {
  try {
    await verifyMailerStatus();
    const mail = formatEmail(contactData);
    await contactEmail().sendMail(mail, (error) => {
      if (error) throw error;
      console.log('Email Sent');
      return;
    });
  } catch (error) {
    throw error;
  }
  return;
};
