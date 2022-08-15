
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

require('dotenv').config({ path: '../../.env' });

// const user = process.env.USER;
// const pass = process.env.PASS;

// console.log(pass)
// const transport = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   port: 587,
//   secure: false,
//   requireTLS: true,
//   auth: {
//     user: user,
//     pass: pass,
//   }
// });

const sendResetEmail = (email, resetToken) => {

//   const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;
//   const message = `
//          <h1>You have requested a password reset</h1>
//          <p> You can reset your password by clicking on the following link: </p>
//          <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
//         `;
//   // transport.sendMail({
//   //   from: user,
//   //   to: email,
//   //   subject: "Reset your password",
//   //   html: message
//   // })
//   // .catch((err) => console.log(err));

//   function getMessage() {
//     return {
//       to: email,
//       from: 'hezekiel.feyissa@gmail.com',
//       subject: 'Reset Your Password',
//       text: message,
//       html: `<div>${message}</div>`
//     };
  }
  
//   async function sendEmail() {
//     try{
//       await sendGridMail.send(getMessage());
//       console.log("Email Sent Successfully!")
//     } catch(error) {
//       console.error("Error sending an email");
//       console.log(error);
//       if (error.response) {
//         console.error(error.response.body)
//       }
//     }
//   }

//   (async () => {
//     console.log('Sending test email');
//     await sendEmail();
//   })();
// }


const sendConfirmationEmail = async (first_name, last_name, email, privilege, token) => {

  // const resetUrl = `https://localhost:3000/confirm/${token}`;
  const resetUrl = `http://goal.com`;
  const message = `<h1>Email Confirmation</h1>
  <div>
  <h2>Dear ${first_name} ${last_name}, </h2>
  <p> This is to inform you that you have been a ${privilege} of AELAPH DEJEN CONVENTION website.
   Please confirm your email by clicking on the following link</p>
   <a href=${resetUrl}> Click here</a></div>`;
  // function getMessage() {
  //   return {
  //     to: email,
  //     from: 'hezekiel.feyissa@gmail.com',
  //     subject: 'Verify Your Email',
  //     text: message,
  //     html: `<div>${message}</div>`
  //   };
  // }

  // async function sendEmail() {
  //   try{
  //     await sendGridMail.send(getMessage());
  //     console.log("Email Sent Successfully!")
  //   } catch(error) {
  //     console.error("Error sending an email");
  //     console.log(error);
  //     if (error.response) {
  //       console.error(error.response.body)
  //     }
  //   }
  // }

  // (async () => {
  //   console.log('Sending test email');
  //   await sendEmail();
  // })();


const msg = {
  to: 'hizkieltamire@gmail.com', // Change to your recipient
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

// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// const msg = {
//   to: 'test@example.com', // Change to your recipient
//   from: 'test@example.com', // Change to your verified sender
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error)
//   })