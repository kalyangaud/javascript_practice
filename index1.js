
const express = require('express')
const app = express()
const port = 3000

app.get("/route-handler", function(req, res){
  res.json({
    name:"Kalyan Gaud",
    age:20
  })
})
app.get('/',(req,res)=>{
    res.send('Hello world!')
})

app.listen(port,()=>
{
    console.log(`Example app listening on port ${port}`)
})
