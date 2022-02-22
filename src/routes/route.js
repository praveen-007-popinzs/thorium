let obj = require('../logger/logger');
const date  = require('../util/helper') 
const express = require('express');
const _ = require('lodash');
const router = express.Router();

router.get('/hello', function (req, res) {
    // months
    var months = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
    const newmonth = _.chunk(months,4);
    console.log(newmonth);

    // odd number
    var oddnumbers = [1,3,5,7,9,11,13,15,17,19];
    const nineth = _.tail(oddnumbers);
    console.log(nineth);

    //union
    var a = [1,2,3];
    var b = [1,2,3,4,5,];
    var c = [6,7,8];
    var d  = [9,2,4];
    var e = [3,5,7];
    var num =_.union([...a, ...b, ...c, ...d, ...e]);
    console.log(num);
    
    //frompairs

    let pairs  = [["horror","The string"], ["drama","titanic"], ["series","Money heist"]];
    const term = _.fromPairs(pairs);
    console.log(term);
    
    obj.welcome("welcome to my app,ication. Iam Praveen Kumar J and a part of FunctionUp Thorium cohort")
    date.date(console.log(new Date().toJSON().slice(0,10)));
    date.month(console.log(new Date().getMonth()+1));
    date.getBatchinfo(console.log("Thorium, W3D1, the topic for today is Nodejs module system"))
    res.send('My first ever api!')
});


module.exports = router;