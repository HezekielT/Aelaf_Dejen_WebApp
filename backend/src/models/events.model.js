const express = require('express')
const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: [true, "Please provide title"]
    },
    image: {
        type: String,
    },
    description: {
        type: String,
        required: [true, "Please provide a description about the event"]
    },
    dateTime: {
        type: String,
        required: [true, "Please Provide date and time of the convention"]
    },
    location: {
        type: String,
        required: [true, "Please provide the location the convention will take place"]
    }
})

module.exports = mongoose.model("Event", eventSchema);