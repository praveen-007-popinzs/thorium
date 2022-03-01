const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String,
    authorName: String,
    stockAvailable : Boolean,
    totalpage : Number,
    tags : [String],
    year : {type : Number, default : 2021},
    price : {
        indian : String,
        european : String
    }
    
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) 



