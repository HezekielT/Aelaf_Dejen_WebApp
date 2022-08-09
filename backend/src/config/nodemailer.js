const nodemailer = require('nodemailer');

require('dotenv').config();

const user = process.env.USER;
const pass = process.env.PASS;

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: user,
    pass: pass,
  }
});

const sendResetEmail = (email, resetToken) => {

  const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;
  const message = `
         <h1>You have requested a password reset</h1>
         <p> You can reset your password by clicking on the following link: </p>
         <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
        `
  transport.sendMail({
    from: user,
    to: email,
    subject: "Reset your password",
    html: message
  })
  .catch((err) => console.log(err));
}

const sendConfirmationEmail = (first_name, last_name, email, privilege, token) => {
  transport.sendMail({
    from: user,
    to: email,
    subject: "Please confirm your email",
    html: `<h1>Email Confirmation</h1>
    <div>
    <h2>Dear ${first_name} ${last_name}, </h2>
    <p> This is to inform you that you have been a ${privilege} of AELAPH DEJEN CONVENTION website.
     Please confirm your email by clicking on the following link</p>
     <a href=https://localhost:5000/confirm/${confirmationCode}> Click here</a></div>`
  })
  .catch((err) => console.log(err));
};

module.exports={sendResetEmail, sendConfirmationEmail}