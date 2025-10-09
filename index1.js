
const express = require('express')
const bodyparser =require("body-parser");
const app = express()
const port = 3000
app.use(express.json());
const fs= require("fs");
fs.readFile("a.txt","utf-8",function(err,data){

})
app.post('/backend-api/conversation',function(req,res){
  const message = req.body.message;
  console.log(message);
  res.json({
    output : "2+2=4"
  })
})
app.get("/route-handler", function(req, res){
  res.json({
    name:"Kalyan Gaud",
    age:20
  })
})
app.get('/',(req,res)=>{
  setTimeout(()=>{
    res.send('Hello world!')
  ,4000})
    
})

app.listen(port,()=>
{
    console.log(`Example app listening on port ${port}`)
})
