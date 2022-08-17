const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')

require('dotenv').config();

const admin = require('./src/routes/admin.routes')

const app = express();

const DATABASE_CONNECTION = process.env.DATABASE_URL;

const connectDB = async () => {

    await mongoose.connect(DATABASE_CONNECTION, {
        UseNewUrlParser: true,
    });
    console.log("Connected to Database")
}

connectDB();

app.use(cors({
    cors: {
        origin: ['http://localhost:3000'],
        methods: ['GET', 'POST']
    }
}));

app.use(express.json());

const port = process.env.PORT || 5000;

app.use('/api/driver/',require('./src/routes/user.routes'));
app.use('/api/event/',require('./src/routes/events.routes'));
app.use('/api/admin',admin);

if(process.env.NODE_ENV ===  'production') {
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    } )
}

app.listen(port, () => {
    console.log(`Currently Listening at http://localhost:${port}`);
});