const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const orderController= require("../controllers/orderController")
const productController = require("../controllers/productController")
const middleWM = require("../middleware/middleware")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createProduct",  productController.createProduct)

router.post("/createUser", middleWM.miduser, userController.createUser  )

router.post("/createOrder",  middleWM.midorder, orderController.createOrder,  )


module.exports = router;