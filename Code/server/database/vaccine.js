var mongoose = require('mongoose');

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