const { Participant } = require('../models/user.model');
const { Driver } = require('../models/user.model')
const { Admin } = require('../models/user.model')
const { Router } = require("express");
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { sendResetEmail, sendConfirmationEmail } from "../config/nodemailer";

const router = Router();
// Routes related to convention participants

router.route('/participate').post(async function(req, res) {
    const { id, event_id, first_name, last_name, email, phoneno, location, event_name } = req.body;
    console.log(id," ",event_id," ",first_name," ",last_name," ",email," ",phoneno," ",location," ",event_name)
    try {
        await Participant.create({
            id,
            event_id,
            user: {
                first_name,
                last_name,
                email,
                phoneno,
            },
            location,
            event_name
        });
        console.log("Successfully registered");
        res.status(201).send();
    } catch(err) {
        res.status(400).json({ message: err.message });
    }
});

router.route('/getParticipants').get(async function(req, res) {
    try{
        const participants = await Participant.find();
        res.status(201).send(participants);
    } catch(err) {
        res.status(400).json({ message: err.message });
    }
})

// Routes related to driver
router.route('/registerDriver').post(async function(req, res){
    const { first_name, last_name, email, phoneno, plateno, location } = req.body;
    try {
        await Driver.create({
            id,
            user: {
                first_name,
                last_name,
                email,
                phoneno,
            },
            plateno,
            location,
        });
        console.log("Successfully registered driver");
        res.status(201).send();
    } catch(err) {
        res.status(400).json({ message: err.message });
    }
})

router.route('/getDrivers').get(async function(req, res) {
    try{
        const drivers = await Driver.find();
        res.status(201).send(drivers);
    } catch(err) {
        res.status(400).json({ message: err.message });
    }
})

router.route('/updateDriver/:id').post(async function (req, response) {
    let id = req.params.id;
    let newvalues = {
        $set: {
            user: [
                req.body.first_name,
                req.body.last_name,
                req.body.email,
                req.body.phoneno,
            ],
            plateno: req.body.plateno,
            location: req.body.location,
        }
    }

    try {
        await Driver.updateOne(id, newvalues, function(err, res){
            if (err) throw err;
            console.log("1 document updated");
            response.json(res);
        })
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.route("/deleteDriver/:id").delete(async (req, response) => {

    let id = req.params.id
    try {
        await Driver.deleteOne(id, function(err, obj){
            if (err) throw err;
            console.log("1 document deleted.");
            response.status(obj);
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

// Routes related to admin

router.route('/registerAdmin').post(async function(req, res){
    const { id, first_name, last_name, email, phoneno, password, privilege } = req.body;
    const token = jwt.sign({ email: email}, process.env.JWT_SECRET);

    try {
        await Admin.create({
            id,
            admin: {
                first_name,
                last_name,
                email,
                phoneno,
            },
            password,
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

router.route('/confirm/:confrimationCode').get(async function(req, res) {
    const user = await Admin.findOne({
        confirmationCode: req.params.confirmationCode,
    })

    if(!user) {
        return res.status(404).send({ message: "Admin not found." });
    }
    user.status = "Active";
    user.save((err) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
    });
});

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
        }
        res.status(200).send({
            success: true,
            data: "Successfully Logged in!",
            token: user.getSignedJwtToken(),
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

        const resetToken = user.getResetPasswordToken()

        await user.save();
        try {
            sendResetEmail(user.email, resetToken);
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
router.route('/passwordreset/:resetToken').post(async function(req, res){
    if (req.params.resetToken !== null){
        const resetPasswordToken = crypto
            .createHash("sha256")
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
                success: true,
                data: "Password Updated Successfully!",
                token: user.getSignedJwtToken(),
            });
        } catch (err) {
            console.log(err);
        }
    } else {
        const { email } = req.body.email
        try {
            const user = await Admin.findOne({
                email,
            });
            if (!user) {
                return res.status(400).send({ message: "Email Not Found!"})
            }

            user.password = req.body.password;

            await user.save();
            res.status(201).json({
                success: true,
                data: "Password Updated Successfully!",
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
        res.status(400).json({ message: err.message });
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


// router.route('/addEvent').post(async function(req, res) {
//     const { title, description, dateTime, location } = req.body;
// })
// router.get("/register", async (req, res, next) => {
//     try {
//         const entries = await LogEntry.find();
//         res.json(entries);
//     } catch (error) {
//         next(error);
//     }
// });

// router.post("/", async (req, res, next) => {
//     try {
//         if (req.get("X-API-KEY") !== API_KEY) {
//             res.status(401);
//             throw new Error("Unauthorized Access");
//         }
//         const logEntry = new LogEntry(req.body);
//         const createdEntry = await logEntry.save();
//         res.json(createdEntry);
//     } catch (error) {
//         if (error.name === "ValidationError") {
//             res.status(422);
//         }
//         next(error);
//     }
// });

module.exports = router;