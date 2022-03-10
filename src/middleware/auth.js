const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

//login validation
const loginMid = async function (req, res, next) {
    let userName = req.body.emailId;
    let password = req.body.password;
  // BAD REQUEST
    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
        res.status(400).send({ msg: "BAD REQUEST"})


    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "CSE",
        organisation: "JCT COLLEGE",
      },
      "jct-cse"
    );
    res.setHeader("x-auth-token", token);
    console.log({ status: true, data: token });
    res.status(200).send({ msg: "ALL GOOD and NEW RESOURCES WAS SUCCESSFULLY CREATED"})

    next()
  };

  //========================
  const createBook = async function (req, res) {
    try {
        let data = req.body.message
        if(!data){
          res.status(500).send({ msg: "SERVER SIDE"})
        }
        
    }
    catch (err) {
        console.log("This is the error :", err.message)
        res.status(500).send({ msg: "Error", error: err.message })
    }
}

  //get user validation

  const getUserMid = async function (req, res, next) {
    let token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });

    let decodedToken = jwt.verify(token, "jct-cse");
    if (decodedToken){
      
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    
    if (!userDetails)
      return res.send({ status: false, msg: "No such user exists" });
  
    res.send({ status: true, data: userDetails });
    }else{
      res.send({ status: false, msg: "token is invalid" });
  
    }
    next()
  };
  //update user validation

  const updateUserMid = async function (req, res, next) {
    let token = req.headers["x-auth-token"];
  if (!token) {
    res.status(401).send({ msg: "AUTHENTICATION MISSING"})
  }else{
    res.status(403).send({ msg: " NOT AUTHENTICATED OR FORBIDDEN"})

  }

  
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if (!user) {
      return res.send("No such user exists");
    }
  
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
    res.send({ status: updatedUser, data: updatedUser });
    next()
  };

  //Delete user validation
  const DeleteUserMid = async function (req, res, next) {
    let token = req.headers["x-auth-token"];
  if (!token) return res.send({ status: false, msg: "token must be present" });
    //RESOURCE NOT FOUND
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if (!user) {
      res.status(404).send({ msg: "RESOURCE NOT FOUND"})
    }
  
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
    res.send({ status: updatedUser, data: updatedUser });
    next()
  };

  // const postMessage = async function (req, res, next) {
  //   let message = req.body.message
  //   let token = req.headers["x-auth-token"]
  //   if(!token) return res.send({status: false, msg: "token must be present in the request header"})
  //   let decodedToken = jwt.verify(token, 'functionup-thorium')

  //   if(!decodedToken) return res.send({status: false, msg:"token is not valid"})
  
  //   let userToBeModified = req.params.userId
  //   let userLoggedIn = decodedToken.userId

  //   if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

  //   let user = await userModel.findById(req.params.userId)
  //   if(!user) return res.send({status: false, msg: 'No such user exists'})
    
  //   let updatedPosts = user.posts
  //   updatedPosts.push(message)
  //   let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})

  //   return res.send({status: true, data: updatedUser})
  //   next()
//}
 
//module.exports.postMessage = postMessage\
module.exports.createBook = createBook
module.exports.getUserMid = getUserMid  
module.exports.DeleteUserMid = DeleteUserMid  
module.exports.updateUserMid = updateUserMid
module.exports.loginMid = loginMid