
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

require('dotenv').config({ path: '../../.env' });

const sendResetEmail = (email, resetToken) => {

  const resetUrl = `https://intense-mountain-14095.herokuapp.com/passwordreset/${resetToken}`;
  const message = `
         <h1>You have requested a password reset</h1>
         <p> You can reset your password by clicking on the following link: </p>
         <a href=${resetUrl}>${resetUrl}</a>
        `;

  const msg = {
    to: email,
    from: 'hezekiel.feyissa@gmail.com',
    subject: 'Reset your Password',
    text: message,
    html: `<strong>${message}</strong>`,
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email Sent')
    })
    .catch((error) => {
      console.error(error)
    })
}

const sendConfirmationEmail = (first_name, last_name, email, privilege, token) => {

  const resetUrl = `https://intense-mountain-14095.herokuapp.com/confirm/${token}`;
  const message = `<h1>Email Confirmation</h1>
  <div>
  <h2>Dear ${first_name} ${last_name}, </h2>
  <p> This is to inform you that you have been a ${privilege} of AELAPH DEJEN CONVENTION website.
   Please confirm your email by clicking on the following link</p>
   <a href=${resetUrl}> Click here</a></div>`;

const msg = {
  to: email, // Change to your recipient
  from: 'hezekiel.feyissa@gmail.com', // Change to your verified sender
  subject: 'Confirm your email',
  text: message,
  html: `<strong>${message}</strong>`,
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })
};

module.exports={sendResetEmail, sendConfirmationEmail}