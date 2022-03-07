const productModel = require("../models/productModel")

 const createProduct = async function(req, res){
     let data = req.body;
     let saveddata = await productModel.create(data) 
     res.send({msg : saveddata})
 }
 module.exports.createProduct = createProduct; 