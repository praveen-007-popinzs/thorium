const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const PublisherController= require("../controllers/PublisherController")
const BookController= require("../controllers/BookController")
const userController = require("../controllers/userController.js")
const middlewareMW = require("../middlewares/commonMiddleware.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", authorController.createAuthor  )

router.post("/createPublisher", PublisherController.createPublisher )

router.post("/createBook", BookController.createBook  )
router.put("/update", BookController.data)

router.get("/getBooksWithAuthorDetails", BookController.getBooksWithAuthorDetails)

//midleware
router.get("/createUser", middlewareMW.mid1, middlewareMW.mid2, middlewareMW.mid3, userController.Middleware);
router.get("/basicAPi", middlewareMW.mid1, middlewareMW.mid2, middlewareMW.mid3, userController.Middleware);
router.get("/falanaAPI", middlewareMW.mid1, middlewareMW.mid2, middlewareMW.mid3, userController.Middleware);

module.exports = router;