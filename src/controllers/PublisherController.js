const { count } = require("console")
const authorModel = require("../models/authorModel")
const PublisherModel= require("../models/PublisherModel")

const createPublisher= async function (req, res) {
    let book = req.body
    let bookCreated = await PublisherModel.create(book)
    res.send({data: bookCreated})

}

module.exports.createPublisher= createPublisher
