const express = require('express')
const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide title"]
    },
    description: {
        type: String,
        required: [true, "Please provide a description about the event"]
    },
    dateTime: {
        type: Date,
        required: [true, "Please Provide date and time of the convention"]
    },
    location: {
        type: String,
        required: [true, "Please provide the location the convention will take place"]
    }
})

module.exports = mongoose.model("Event", eventSchema);