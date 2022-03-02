const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const PublisherController= require("../controllers/PublisherController")
const BookController= require("../controllers/BookController")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", authorController.createAuthor  )

router.post("/createPublisher", PublisherController.createPublisher )

router.post("/createBook", BookController.createBook  )

router.get("/getBooksWithAuthorDetails", BookController.getBooksWithAuthorDetails)

module.exports = router;