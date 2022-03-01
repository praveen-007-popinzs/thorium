const BookModel= require("../models/bookModel")

const createUser= async function (req, res) {
    let data= req.body
    //create book
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    //list of books
    //let allUsers= await BookModel.find().select( { bookName: 1, authorName: 1, _id: 0})
    //books year
    //let allUsers= await BookModel.find({year : 2000})
    // let body = req.body
    // if(body == {"name" : "hi"}){
    // let allUsers= await BookModel.find({bookName : "hi"})
    
    // res.send({msg: allUsers})
    // }
    // let body = req.body
    // if(body == {"year" : 2000}){
    // let allUsers= await BookModel.find({year : 2000})
    
    // res.send({msg: allUsers})
    // }


//  getting books > 500 page    
// let allUsers= await BookModel.find( { 
//          $or: [ { stockAvailable : true} , { page :{$gt: 500} }]
//         })
    
//     res.send({msg: allUsers})

// }
// getting books > 500 page    
let allUsers= await BookModel.find( { 
         $or: [ {price : {indian : "500INR"}} , {price : {indian : "1200INR"},price : {indian : "1500INR"} }]
        })
    
    res.send({msg: allUsers})

}


module.exports.createUser= createUser
module.exports.getUsersData= getUsersData