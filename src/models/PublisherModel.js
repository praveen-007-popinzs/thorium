const mongoose = require('mongoose');
// const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    
    name : String,
    headQuarter: String,
    key : String


}, { timestamps: true });


module.exports = mongoose.model('newpublisher', bookSchema)
