const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware = require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", middleware.loginMid, userController.loginUser)

router.post("/tryCatch", middleware.createBook, userController.createBook)

//The userId is sent by front end
router.get("/users/:userId", middleware.getUserMid, userController.getUserData)

//router.post("/users/:userId/posts", middleware.postMessage, userController.postMessage)

router.put("/users/:userId", middleware.updateUserMid, userController.updateUser)

router.put("/users/:userId", middleware.DeleteUserMid, userController.DeleteUser)

module.exports = router;