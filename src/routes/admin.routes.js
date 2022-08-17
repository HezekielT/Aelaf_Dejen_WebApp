const { Admin } = require('../models/user.model')
const { Router } = require("express");
const crypto = require('crypto')
const jwt = require("jsonwebtoken");
const { sendResetEmail, sendConfirmationEmail } = require("../config/nodemailer");

const router = Router();

router.route('/registerAdmin').post(async function(req, res){
  const { id, first_name, last_name, email, phoneno, privilege } = req.body;
  const token = jwt.sign({ email: email}, process.env.JWT_KEY);

  try {
      await Admin.create({
          id,
          admin: {
              first_name,
              last_name,
              email,
              phoneno,
          },
        //   password,
          privilege,
          confirmationCode: token,
      });
      console.log("Successfully registered driver");
      sendConfirmationEmail(first_name, last_name, email, privilege, token);
      res.status(201).send();
  } catch(err) {
      res.status(400).json({ message: err.message });
  }

})

router.route('/confirm/:confirmationCode').get(async function(req, res) {
  const confirmcode = req.params.confirmationCode;
  const user = await Admin.findOne({
      confirmationCode: confirmcode,
  })

  if(!user) {
      return res.status(404).send({ message: "Admin not found." });
  }
  user.status = "Active";
  const id = user.id;
  user.save((err) => {
      if (err) {
          res.status(500).send({ message: err });
          return;
      }
  });
  res.status(200).send({
      success: true,
      data: "Admin is active now",
      id: id
  })
});

router.route('/createnewpassword').post(async function(req, res) {
    const { id, password } = req.body;
    const user = await Admin.findOne({
        id
    })

    if(!user) {
        return res.status(404).send({ message: "Not Found!"})
    }
    user.password = password;
    user.save((err) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
    });
    res.status(200).send({
        success: true,
        data: "Password Successfully Created!"
    })
})

router.route('/signin').post(async function(req, res) {
  const { email, password } = req.body;
  try {
      const user = await Admin.findOne({ email }).select("+password");
      
     if (!user) {
          return res.status(404).send({ message: "Admin Not found!"});
      }
      const isMatch = await user.matchPassword(password);
      if(!isMatch) {
          return res.status(400).send({ message: "Incorrect email or password"})
      }if(user.status === "Pending") {
          return res.status(400).send({ message: "Please verify your email first!"})
      }
      if(user.status === "Suspended") {
          return res.status(400).send({ message: "You have been suspended by the admin!"})
      }
    
      res.status(201).send({
        first_name: user.admin.first_name,
        last_name: user.admin.last_name,
        privilege: user.privilege,
        id: user.id,
        token: user.getSignedJwtToken(),
        success: "Successfully Logged In",
      });
  } catch (err) {
      res.status(400).json({message: err.message})
  }

})

router.route('/forgotPassword').post(async function(req, res, next){
  const { email } = req.body;

  try {
      const user = await Admin.findOne({ email });
      if (!user) {
          return res.status(404).send({ message: "No email could not be sent, Please check your email!"})
      }

      const resetToken = await user.getResetPasswordToken()
      await user.save();
      try {
          sendResetEmail(email, resetToken);
          res.status(200).json({ success: true, data: 'Email Sent'})
      } catch (err) {
          console.log(err);
          user.resetPasswordToken= undefined;

          await user.save();

      }        
  } catch (err) {
      next(err)
  }
})
// can the parameter reset token be optional?
router.route('/passwordreset/:resetToken?').post(async function(req, res){
    console.log(req.params.resetToken, "kl")
  if (req.params.resetToken !== undefined ){
      const resetPasswordToken = crypto.createHash("sha256")
          .update(req.params.resetToken)
          .digest("hex");
      try {
          const user = await Admin.findOne({
              resetPasswordToken,
          });
          if (!user) {
              return res.status(400).send({ message: "Invalid Token!"})
          }

          user.password = req.body.password;
          user.resetPasswordToken = undefined;

          await user.save();
          res.status(201).json({
            first_name: user.admin.first_name,
            last_name: user.admin.last_name,
            privilege: user.privilege,
            id: user.id,
            token: user.getSignedJwtToken(),
          });
      } catch (err) {
          console.log(err);
      }
  } else {
      const { id, oldPassword, password } = req.body;
      try {
          const user = await Admin.findOne({
              id,
          });
          if (!user) {
              return res.status(400).send({ message: "Admin Not Found!"})
          }

          const isMatch = await user.matchPassword(oldPassword);
          if(!isMatch) {
            return res.status(400).send({ message: " Old Password is Incorrect"})
          }

          user.password = password;

          await user.save();
          res.status(201).send({
            admin: user.admin,
            privilege: user.privilege,
            id: user.id,
            token: user.getSignedJwtToken(),
          });
      } catch (err) {
          console.log(err);
      }
  }
})
router.route('/getAdmins').get(async function(req, res) {
  try{
      const events = await Admin.find();
      res.status(201).send(events);
  } catch(err) {
      console.log(err)
  }
})

router.route('/updateAdmin/:id').post(async function (req, response) {
  const { first_name, last_name, email, phoneno, password, privilege } = req.body;
  // try {
  //     await Admin.create({
  //         id,
  //         admin: {
  //             first_name,
  //             last_name,
  //             email,
  //             phoneno,
  //         },
  //         plateno,
  //         location,
  //     });
  //     console.log("Successfully registered driver");
  //     res.status(201).send();
  // } catch(err) {
  //     res.status(400).json({ message: err.message });
  // }
  let id = req.params.id;
  let newvalues = {
          admin: {
              first_name,
              last_name,
              email,
              phoneno,
          },
          password: password,
          privilege: privilege,
          // user: {
          //     req.body.first_name,
          //     req.body.last_name,
          //     req.body.email,
          //     req.body.phoneno,
          // },
          // plateno: req.body.plateno,
          // location: req.body.location,
      }

  try {
      await Admin.updateOne(id, newvalues, function(err, res){
          if (err) throw err;
          console.log("1 document updated");
          response.json(res);
      })
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
});

router.route("/deleteAdmin/:id").delete(async (req, response) => {

  let id = req.params.id
  try {
      await Admin.deleteOne(id, function(err, obj){
          if (err) throw err;
          console.log("1 document deleted.");
          response.status(obj);
      });
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
})


module.exports = router;