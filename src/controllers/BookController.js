const { count } = require("console")
const authorModel = require("../models/authorModel")
const PublisherModel= require("../models/PublisherModel")
const BookModel= require("../models/BookModel")

const createBook= async function (req, res) {
    let book = req.body
    if(!book.author){
        res.send({data: "authorid detail is required"})
    }

    if(!book.author !== "61951bfa4d9fe0d34da86829"){
        res.send({data: "invalid author id"})
    }

    if(!book.publisher){
        res.send({data: "publisherid detail is required"})
    }

    
    if(!book.publisher !== "61951bfa4d9fe0d34da84523"){
        res.send({data: "invalid publisher id"})
    }
    
    let bookCreated = await BookModel.create(book)
    res.send({data: bookCreated})
}   

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await BookModel.find().populate('author')
    res.send({data: specificBook})

}


module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.createBook = createBook

