console.log("Hello World")

const express = require("express")

let PORT = 8000

let app = express()

app.get("/practice", function(req,res){
    res.send("Hello there");
})

app.listen(8000, function(){
    console.log("App is listening on port", PORT);
})

app.post("/practice", function(req,res){

})