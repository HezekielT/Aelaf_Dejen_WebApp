const { Participant } = require('../models/user.model');
const { Driver } = require('../models/user.model')
const { Router } = require("express");

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

module.exports = router;