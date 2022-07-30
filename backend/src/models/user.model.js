const express = require('express');
const mongoose = require('mongoose')


const userSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            required: [true, "Please provide your Last Name!"],
        },
        last_name: {
            type: String,
            required: [true, "Please provide your Last Name!"],
        },
        email: {
            type: String,
            required: [true, "Please provide your email address!"],
            unique: true,
            match: [
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ , 
                "Please provide a valid email",
            ],
        },
        phoneno: {
            type: String,
            required: [true, "Please provide your phone number!"],
        },        
    }
);

const participantSchema = new mongoose.Schema({
    user: userSchema,
    location: {
        type: String,
    }
})

const driverSchema = new mongoose.Schema({
    user: userSchema,
    plateno: {
        type: String,
        required: [true, "Please provide plate number"],
    },
    initialLocation: {
        type: String,
        require: [true, "Please provide location"]
    }
})

module.exports = {
    Participant: mongoose.model('Participant', participantSchema),
    Driver: mongoose.model('Driver', driverSchema),
}
