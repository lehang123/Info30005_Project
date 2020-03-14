var mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    account_name: String,
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
