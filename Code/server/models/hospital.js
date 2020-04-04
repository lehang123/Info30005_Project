var mongoose = require('mongoose');

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