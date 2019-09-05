/*
   Minimal process of sending email with nodemailer
*/
require('dotenv').config()
const nodemailer = require('nodemailer')

// transporter for gmail smtp
// *** 'Less secure app access' in google account must be on

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSWORD
  }
})

// transporter for Mailtrap smtp

/* const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  }
}) */

let mailOptions = {
  from: `"Node Mailer" <${process.env.EMAIL_USERNAME}>`,
  to: 'yepip@drmail.net', // temp. mail
  subject: 'Welcome Email',
  html:
    '<h2 style="color: #0f0;">This is the email sent through nodemailer</h2>'
}

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(info)
})
