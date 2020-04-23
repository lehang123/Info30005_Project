var mongoose = require('mongoose');

/*
    this is a vaccine schema,
    to store the all vaccine into the vaccines collection
    (* is a must have information)

    Id* : to identify a vaccine,
    name* : name of the vaccine,
    cost* : cost of a vaccine for a patient, 
    stock* : how many in stock,
    alleries* : what alleries might cause,
    prevent_disease* : what immunity does it gives
    good_for_groups: who are the suitable/recommend to take the vaccine
    recommend_star* : how recommended this vaccine to the public
    available_at* : where can we get the vaccine
    manufacturer* : manufacturer of the vaccine

*/

const vaccineSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
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
    stocks: {
        type: Number,
        required: true,
        validate: {validator: function(stock){
                return Number.isInteger(stock) && stock>=0
            },
            message: props => `stock ${props.value} is an valid number !!`
        }
    },
    alleries: {
        type: [String],
        required: true
    },
    prevent_disease: {
        type: [String],
        required: true
    },
    good_for_groups: {
        type: [String]
    },
    recommend_star: { 
        type: Number,
        required: true,
        validate: {validator: function(stars){
                return Number.isInteger(stars) && 0<=stars && stars<=5
            },
            message: props => `stars need to be an integer that doesn't excess 0 ~ 5, found : ${props.value}`
        }
    },
    available_at: {
        type: [String],
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Vaccine', vaccineSchema)