let axios = require("axios")
//district


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

//sorted cities regarding temperature

let getsortedcities = async function(req, res){
   try{
       let cities= ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "chennai", "London", "Moscow"]
       let cityObjArray= []
       for (i=0 ; i<cities.length; i++){
           let obj={city: cities[i] }
           let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=6fd187662991d16b69aaac3c72fe1956`)
           console.log(resp.data.main.temp)

           obj.temp = resp.data.main.temp
           cityObjArray.push(obj)
}

let sorted = cityObjArray.sort(function(a, b){ return a.temp - b.temp})
console.log(sorted)
res.status(200).send({satus : true, data : sorted})

   }catch(error){
       console.log(error)
       res.status(500).send({status : false, msg : "Server error"})
   }
   }

   //meme handler

   let memeHandler = async function(req, res){
       try{
           let options = {
               method : "post",
               url :"https://api.imgflip.com/caption_image?template_id=188390779&text0=Functionup&text1=yes&username=chewie12345&password=meme@123"
              // url : `https://api.imgflip.com/get_memes`
           }
           let result = await axios(options)

           res.send({data : result.data})

           }catch(error){
               console.log(error)
               res.status(500).send({status : false, msg : "server error"})
           }
       
   }




   module.exports.memeHandler = memeHandler
module.exports.getsortedcities = getsortedcities
module.exports.getDistricts = getDistricts
