var mongoose = require('mongoose');
const Vaccine = require('./vaccine');
const Hospital = require('./hospital');

/*
    this is a hospital-vaccine schema,
    a intersection between hospital and vaccine as they are many to many relation
    (* is a must have information)
    
    Id*: to identify a hospital-vaccine relation,
    hospital_id*: to find the hospital in hospital collection, 
    vaccine_id*: to find the vaccine in vaccine collection,
    stocks*: how many vaccine stocks in the hospital
*/
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

/* combine key must not be duplicated */
hospVaccSchema.index({ hospital_id: 1, vaccine_id: 1}, { unique: true })

module.exports = mongoose.model('Hosp-Vacc', hospVaccSchema)