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
    id: {
        type: String,
        required: [true]
    },
    user: userSchema,
    location: {
        type: String,
    }
})

const driverSchema = new mongoose.Schema({
    id: {
        type: String,
        required: [true]
    },
    user: userSchema,
    plateno: {
        type: String,
        required: [true, "Please provide plate number"],
    },
    convention: {
        tyoe: String,
        required: [true, "please select assigned convention"]
    },
    initialLocation: {
        type: String,
        require: [true, "Please provide location"]
    }
})

const adminSchema = new mongoose.Schema({
    id: {
        type: String,
        required: [true],
    },
    admin: userSchema,
    password: {
        type: String,
        required: [true, "Please add a password"],
        minlength: 6,
        select: false,
    },
    privilege: {
        type: Boolean,
        required: [true],
    },
})

adminSchema.pre('save', async function(done) {
    if (!this.isModified("password")) {
        done();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    done();
});

adminSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password, this.password);
 };

adminSchema.methods.getSignedJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.ACCESS_TOKEN_SECRET);
    // jwt.sign({ id: this._id }, process.env.ACCESS_TOKEN_SECRET, {
    //     expiresIn: process.env.ACCESS_TOKEN_EXPIRE,
    // });
};

adminSchema.methods.getResetPasswordToken = async function () {
    let resetToken = crypto.randomBytes(32).toString("hex");

    this.resetPasswordToken = await bcrypt.hash(resetToken, Number(10));
    return resetToken;
}

module.exports = {
    Participant: mongoose.model('Participant', participantSchema),
    Driver: mongoose.model('Driver', driverSchema),
    Admin: mongoose.model('Admin', adminSchema),
}
