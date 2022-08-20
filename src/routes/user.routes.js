const { Participant } = require('../models/user.model');
const { Driver } = require('../models/user.model')
const { Router } = require("express");

const router = Router();
// Routes related to convention participants

router.route('/participate').post(async function(req, res) {
    const { id, event_id, first_name, last_name, email, phoneno, location, event_name } = req.body;
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

router.route('/getParticipants/:id').get(async function(req, res) {
    let id = req.params.id;
    // console.log(id)
    try{
        const participants = await Participant.find({}).where('event_id').equals(id);
        res.status(201).send(participants);
    } catch(err) {
        res.status(400).json({ message: err.message });
    }
})

// Routes related to driver
router.route('/registerDriver').post(async function(req, res){
    const { id, first_name, last_name, email, phoneno, plateno, convention, initialLocation } = req.body;
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
            convention,
            initialLocation,
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
        await Driver.updateOne({id: id}, newvalues).then(function(err, res){
            console.log("1 document updated");
            response.status(200).json(res);
        })
    } catch (err) {
        response.status(400).json({ message: err.message });
    }
});

router.route("/deleteDriver/:id").delete(async (req, response) => {

    let id = req.params.id
    try {
        await Driver.deleteOne({id: id}).then(function(err, obj){
            console.log("1 document deleted.");
            response.status(200).json(res);
        });
    } catch (err) {
        response.status(400).json({ message: err.message });
    }
})

module.exports = router;