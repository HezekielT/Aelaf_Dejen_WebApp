const express = require('express');
const Event = require('../models/events.model');
const { protect } = require('../middleware/authMiddleware')
const router = express.Router();

router.route('/addEvent').post(protect, async function(req, res) {
    const { id, title, image, description, dateTime, location } = req.body;
    try {
        await Event.create({
            id,
            title, 
            image, 
            description, 
            dateTime, 
            location
        });
        res.status(201).send();
    } catch(err) {
        res.status(400).json({ message: err.message });
    }

});

router.route('/getEvents').get(async function(req, res) {
    try{
        const events = await Event.find();
        res.status(201).send(JSON.stringify(events));
    } catch(err) {
        res.status(400).json({ message: err.message });
    }
})

router.route('/updateEvent/:id').post(protect, async function (req, response) {
    let id = req.params.id;
    let newvalues = {
        $set: {
            title: req.body.title,
            image: req.body.image, 
            description: req.body.description, 
            dateTime: req.body.dateTime, 
            location: req.body.location
        }
    }

    try {
        await Event.updateOne({id: id}, newvalues).then(function(err, res){
            // if (err) throw err;
            console.log("1 document updated");
            response.status(200).json(res);
        })
    } catch (err) {
        response.status(400).json({ message: err.message });
    }
});

router.route("/deleteEvent/:id").delete(protect, async (req, response) => {

    let id = req.params.id;
    try {
        await Event.deleteOne({id: id}).then(function() {
            response.status(200).send({ message: "Successfully Deleted!"})
        });
    } catch (err) {
        response.status(400).json({ message: err.message });
    }
})

module.exports = router;