var mongoose = require('mongoose');

/*
    this is a hospital schema,
    to store the all hospitals into the hospital collection
    (* is a must have information)
    
    Id*: to identify a hospital,
    name*: the name of hospital, 
    location*: where is the hospital,
    language*: what kind of language consutation this hospital can offer 
*/

const hospitalSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true 
    },
    location: {
        type: String,
        required: true
    },
    language: {
        type: [String],
        required: true
    }
})

module.exports = mongoose.model('Hospital', hospitalSchema)