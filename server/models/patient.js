var mongoose = require('mongoose');

/*
    this is a patient schema,
    to store the all patients into the patients collection
    (* is a must have information)

    Id*: to identify a patient,
    account_id*: a patient's account id, 
    password*: password to login, encrpyted and salt,
    username*: to shows on the website,
    birthday*: to identify the patients' age
    gender*: record a patient's gender
    contact*: the contact information(i.e. phone number)
    emergency_contact: the emergency contact information
    heatlh_detail: history of health for the patient
    location: where the patient live (town)
    vaccine_history: vaccine history of patient
    language: what language patient speaks
*/

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
