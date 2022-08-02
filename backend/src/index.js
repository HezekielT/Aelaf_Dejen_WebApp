const express = require('express')

const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config();

const app = express();

const DATABASE_CONNECTION = process.env.DATABASE_URL;

mongoose.connect(DATABASE_CONNECTION, {
    UseNewUrlParser: true,
});

app.use(cors({
    origin: process.env.CORS_ORIGIN,
}));

app.use(express.json());

app.get('/', (req, res ) => {
    res.json({
        message: 'Hello There',
    });
});

const port = process.env.PORT || 4000;

app.use(require('./routes/user.routes'));
app.use(require('./routes/events.routes'));

app.listen(port, () => {
    console.log(`Currently Listening at http://localhost:${port}`);
});