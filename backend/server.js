const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const axios = require('axios'); 
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const RECAPTCHA_SECRET_KEY = process.env.SECRET_KEY;
const port = process.env.PORT || 4000;

app.use(bodyParser.json());

app.use(cors({
    origin: "http://localhost:3000", 
    credentials: true
}));

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
  debug: false
});

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptionsOwner = {
    from: email,
    to: process.env.MY_EMAIL,
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

app.post('/verify-recaptcha', async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ success: false, error: 'reCAPTCHA token is missing' });
  }

  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: RECAPTCHA_SECRET_KEY,
          response: token,
        },
      }
    );

    if (response.data.success) {
      res.json({ success: true, message:"Verification done" });
    } else {
      res.status(400).json({ success: false, error: response.data['error-codes'] });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
