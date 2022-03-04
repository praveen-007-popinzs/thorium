const { count } = require("console")
const authorModel = require("../models/authorModel")
const PublisherModel= require("../models/PublisherModel")
const BookModel= require("../models/BookModel")

const createBook= async function (req, res) {
    let book = req.body
    let authorid = book.author
    let publisherid = book.publisher
    // if(!book.author){
    //     res.send({data: "authorid detail is required"})
    // }

    // if(!book.author !== authorid){
    //     res.send({data: "invalid author id"})
    // }

    // if(!book.publisher){
    //     res.send({data: "publisherid detail is required"})
    // }

    
    // if(!book.publisher !== publisherid){
    //     res.send({data: "invalid publisher id"})
    // }
    
    let bookCreated = await BookModel.create(book)
    res.send({data: bookCreated})
}   

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await BookModel.find().populate('author publisher ')
    res.send({data: specificBook})

}
const data = async function (req, res) {
    let result = await data.updateOne(
        {name
            :
            "HarperCollins"},
            {$set:req.body}
    )
    res.send({data: result})

}
module.exports.data=data
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.createBook = createBook

