const { Router } = require("express")
import { Participant, Driver, Admin } from '../models/user.model';


const router = Router();
// Routes related to convention participants

router.route('/participate').post(async function(req, res) {
    const { id, first_name, last_name, email, phoneno, address } = req.body;
    try {
        await Participant.create({
            id,
            user: {
                first_name,
                last_name,
                email,
                phoneno,
            },
            address,
        });
        console.log("Successfully registered");
        res.status(201).send();
    } catch(err) {
        res.status(400).json({ message: err.message });
    }
});

// Routes related to driver
router.route('registerDriver').post(async function(req, res){
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
        const events = await Driver.find();
        res.status(201).send(events);
    } catch(err) {
        res.status(400).json({ message: err.message });
    }
})

router.route('/updateDriver/:id').post(function (req, response) {
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

router.route("/:id").delete((req, response) => {

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

router.route('registerAdmin').post(async function(req, res){
    const { id, first_name, last_name, email, phoneno, password, privilege } = req.body;
    try {
        await Admin.create({
            id,
            admin: {
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
// const { id, first_name, last_name, email, phoneno, password, privilege } = req.body;
//     try {
//         await Admin.create({
//             id,
//             admin: {
//                 first_name,
//                 last_name,
//                 email,
//                 phoneno,
//             },
//             plateno,
//             location,
//         });
//         console.log("Successfully registered driver");
//         res.status(201).send();
//     } catch(err) {
//         res.status(400).json({ message: err.message });
//     }

router.route('/getDrivers').get(async function(req, res) {
    try{
        const events = await Admin.find();
        res.status(201).send(events);
    } catch(err) {
        res.status(400).json({ message: err.message });
    }
})

router.route('/updateDriver/:id').post(function (req, response) {
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

router.route("/:id").delete((req, response) => {

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