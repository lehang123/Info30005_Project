var mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    account_name: {
        type: String,
        unique: true, // account_name has to be unique
        required: true // boolean or function, if true adds a required validator for this property
    },
    password: String,
    name: String,
    birthday: Date,
    gender: String,
    contact: String,
    emergency_contact: String,
    heatlh_detail: String,
    location: String,
    vaccine_history: String
});

module.exports = mongoose.model('Patient', patientSchema)
