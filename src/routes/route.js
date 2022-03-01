const express = require('express');
const router = express.Router();
const bookModel= require("../models/bookModel.js")
const bookController= require("../controllers/bookController")



router.post("/createUser", bookController.createUser  )

router.get("/getUsersData", bookController.getUsersData)

module.exports = router;