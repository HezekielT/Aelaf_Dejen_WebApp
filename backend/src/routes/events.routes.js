const { Router } = require('express');
import { Event } from '../models/events.model';

const router = Router();

router.route('/addEvent').post(async function(req, res) {
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
        res.status(201).send(events);
    } catch(err) {
        res.status(400).json({ message: err.message });
    }
})

router.route('/updateEvent/:id').post(function (req, response) {
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
        await Event.updateOne(id, newvalues, function(err, res){
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
        await Event.deleteOne(id, function(err, obj){
            if (err) throw err;
            console.log("1 document deleted.");
            response.status(obj);
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})