var mongoose = require('mongoose');
const Vaccine = require('./vaccine');
const Hospital = require('./hospital');

const hospVaccSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    hospital_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        validate: {validator: function(id){
            return Promise.resolve(Hospital.exists({_id: id}))  
            },
            message: props => `hospital_id $ ${props.value} doesn't exist in the hospital collection!!`
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
    },
    stocks: {
        type: Number,
        required: true,
        validate: {validator: function(stock){
                return Number.isInteger(stock) && stock>=0
            },
            message: props => `stock ${props.value} is an valid number !!`
        }
    }
})

module.exports = mongoose.model('Hosp-Vacc', hospVaccSchema)