// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }));

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
  debug: false // Disable debug in production
});

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptionsOwner = {
    from: email,
    to: process.env.MY_EMAIL, // Your email id
    subject: 'New Contact Form Submission on your portfolio',
    text: `You have a new message from:
    Name: ${name}
    Email: ${email}
    Message: ${message}`,
  };

  const mailOptionsUser = {
    from: process.env.MY_EMAIL,
    to: email,
    subject: 'Contact Form Submission Confirmation',
    text: `Dear ${name},
    \nThank you for contacting me. Your message has been received and I appreciate the time you've taken to reach out.
    I will review your message carefully and get back to you as soon as possible. Your interest is important to me.
    \n\nBest regards,
    Shinkhal Sinha`,
  };

  transporter.sendMail(mailOptionsOwner, (error, info) => {
    if (error) {
      console.error('Error sending email to owner:', error);
      return res.status(500).send(error.toString());
    }
    transporter.sendMail(mailOptionsUser, (error, info) => {
      if (error) {
        console.error('Error sending email to user:', error);
        return res.status(500).send(error.toString());
      }
      console.log('Emails sent successfully!');
      res.status(200).json({ message: 'Emails sent successfully!' });
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
