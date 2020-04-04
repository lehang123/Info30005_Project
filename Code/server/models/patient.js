var mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    account_id: {
        type: String,
        unique: true, // account_name has to be unique
        required: true // boolean or function, if true adds a required validator for this property(means can't be empty)
    },
    password: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    birthday: { // JSON date format: "2012-03-19"
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
    vaccine_history: String,
    language: [String]
});

module.exports = mongoose.model('Patient', patientSchema)
