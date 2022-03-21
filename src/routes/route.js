const express = require('express');
const router = express.Router();

const authorController = require("../Controller/authorController")
const blogController = require("../Controller/blogController")

const authMiddleware = require("../middleware/auth");
const checkIsDeleted=require("../middleware/chechisDeleted")
const blogModel = require('../Model/blogModel');



router.get("/test-me", function(req,res){
    res.send("hello there")
})

router.post("/createAuthor", authorController.createAuthor)

router.post("/createBlog", authMiddleware.authenticate,   blogController.createBlog)

//router.get("/allBlogs", blogController.allBlogs)



router.get("/blogs", authMiddleware.authenticate,   blogController.BloglistbyFilter)

router.put("/blogs/:blogId", authMiddleware.authenticate, authMiddleware.authorise, blogController.updateBlog)

router.delete("/delete/blogs/:blogId", authMiddleware.authenticate, authMiddleware.authorise , blogController.deleteBlog)

router.delete("/delete/blogs" , authMiddleware.authenticate,  authMiddleware.authorise ,  blogController.deletecertainBlog)

router.post("/login", blogController.userLogin)
router.get("/allBlogs", blogController.allBlogs)

module.exports = router;