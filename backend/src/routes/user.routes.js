const { Router } = require("express")
import { Participant, Driver } from '../models/user.model';


const router = Router();

router.route('/participate').post(async function(req, res) {
    const { first_name, last_name, email, phoneno, address } = req.body;
    try {
        await Participant.create({
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

router.route('registerDriver').post(async function(req, res){
    const { first_name, last_name, email, phoneno, plateno, location } = req.body;
    try {
        await Driver.create({
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


router.route('/addEvent').post(async function(req, res) {
    const { title, description, dateTime, location } = req.body;
})
router.get("/register", async (req, res, next) => {
    try {
        const entries = await LogEntry.find();
        res.json(entries);
    } catch (error) {
        next(error);
    }
});

router.post("/", async (req, res, next) => {
    try {
        if (req.get("X-API-KEY") !== API_KEY) {
            res.status(401);
            throw new Error("Unauthorized Access");
        }
        const logEntry = new LogEntry(req.body);
        const createdEntry = await logEntry.save();
        res.json(createdEntry);
    } catch (error) {
        if (error.name === "ValidationError") {
            res.status(422);
        }
        next(error);
    }
});

module.exports = router;