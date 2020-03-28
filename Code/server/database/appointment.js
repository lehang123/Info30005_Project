var mongoose = require('mongoose');
const Vaccine = require('./vaccine');
const Patient = require('./patient');
const Hospital = require('./hospital');

const appointmentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    patient_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        validate: {
            validator: function(id){
                return Promise.resolve(Patient.exists({_id: id}))    
            },
            message: props => `patient_id $ ${props.value} doesn't exist in the patient collection!!`
        }
    },
    hospital_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        validate: {validator: function(id){
            return Promise.resolve(Hospital.exists({_id: id}))  
            },
            message: props => `hospital_id $ ${props.value} doesn't exist in the hospital collection!!`
        }
    },
    date_time: { // JSON Date-Time : "2012-03-19T07:22Z"
        type: Date,
        required: true
    },
    cost: {
        type: Number,
        required: true,
        validate: {validator: function(cost){
                return cost>0
            },
            message: props => `cost $ ${props.value} is an negative !!`
        }
    },
    vaccine_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        validate: {validator: function(id){
            return Promise.resolve(Vaccine.exists({_id: id}))  
            },
            message: props => `vaccine_id $ ${props.value} doesn't exist in the vaccine collection!!`
        }
    }
})

module.exports = mongoose.model('Appointment', appointmentSchema)