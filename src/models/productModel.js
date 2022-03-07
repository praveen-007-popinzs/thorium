const mongoose = require('mongoose');

const productScheme = new mongoose.Schema(
    {
    name:String,
	category:String,
	price:Number,
}, { timestamps: true });

module.exports = mongoose.model('product', productScheme)

