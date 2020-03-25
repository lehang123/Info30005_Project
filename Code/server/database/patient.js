var mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        unique: true,
        required: true
    },
    account_name: {
        type: String,
        unique: true, // account_name has to be unique
        required: true // boolean or function, if true adds a required validator for this property(means can't be empty)
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    birthday: {
        type: Date,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    emergency_contact: String,
    heatlh_detail: String,
    location: String,
    vaccine_history: String
});

module.exports = mongoose.model('Patient', patientSchema)
