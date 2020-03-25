var mongoose = require('mongoose');

const vaccineSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        unique: true,
        required: true
    },
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
    stock: {
        type: Number,
        required: true,
        validate: {validator: function(stock){
                return Number.isInteger(stock) && stock>0
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
                return Number.isInteger(stock) && 0<=stars && stars<=5
            },
            message: props => `star can't be an number that excess 0 ~ 5`
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