const express = require('express');
const router = express.Router();


router.get('/movies', function(req, res) {
    //get movies
    var movies = ["sherlock holmes", "Beast","tamilin perumai", "shanwak redemption"];
    res.send(movies);
})

router.get('/movies/1', function(req, res){
      //get movies 1
    var movies = ["sherlock holmes", "Beast","tamilin perumai", "shanwak redemption"];
    res.send(movies[1]);
})

router.get('/movies/scenario', function(req, res){
    //scenario
  var movies = ["sherlock holmes", "Beast","tamilin perumai", "shanwak redemption"];
  if(movies[4] != movies[1]){
      res.send(("Error : invalid index is mentioned"));
  }else{
    res.send(("mentioned correct index"));
  }
})

router.get('/films', function(req, res){
    //get 
  var movies = [{ "id" : 1, "name": "sherlock holmes"
}, {
  "id": 2, 
  "name":"Beast"
},{
  "id" : 3, 
  "name" :"tamilin perumai"
},{
  "id":4, 
  "name": "shanwak redemption"}];
  res.send(movies); 
})

router.get('/films/:filmid', function(req, res){
  //film id
  var movies = [{ "id" : 1, "name": "sherlock holmes"
}, {
  "id": 2, 
  "name":"Beast"
},{
  "id" : 3, 
  "name" :"tamilin perumai"
},{
  "id":4, 
  "name": "shanwak redemption"}];
  let value  = req.params.filmid;
    if(value > movies.length-1){
      res.send("no movie exist in this index") 
    }else{
       res.send(movies[value]);
    }

  })









module.exports = router;
