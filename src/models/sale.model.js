const mongoose = require('mongoose');
const product = require('./product');
// const product = require('./product');
const Schema = mongoose.Schema;

const Sale = new Schema({
    quantity: {
        type: Number,
        min:1,
        max: 10,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'products',
    },
    total: {
        type: Number,
        dafault: 0,
    },
});

module.exports = mongoose.model('sales', Sale);