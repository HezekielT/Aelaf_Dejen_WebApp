const express = require('express')
const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    full_name: {
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
    message: {
        type: String,
        required: [true],
    },        
})

module.exports = mongoose.model("Contact", contactSchema);