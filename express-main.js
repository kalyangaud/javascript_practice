const express = require("express");
const app = express();

const user = [{
    name : "john",
    kidneys: [{
        healthy: false
    }]
}];

app.get ("/",function(req,res)
{
   const johnKidneys = user[0].kidneys;
   const numberOfKidney = johnKidneys.length;
   let numberOfHealthyKidneys=0;
   for (let i=0;i<johnKidneys.length;i++){
    if (johnKidneys[i].healthy){
    numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
    }
   }
     const numberOfUnHealthyKidneys = numberOfKidney - numberOfHealthyKidneys;
     res.json({
        numberOfKidney,
        numberOfHealthyKidneys,
        numberOfUnHealthyKidneys
     })
})

app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy;
    user[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
       msz:"done!" 
    })
})
app.put("/",function(req,res){
    for ( let i=0;i<user[0].kidneys.length;i++){
      user[0].kidneys[i].healthy = true;  
    }
    res.json({});
})

app.delete("/",function(req,res){
   const newKidneys = [];
   for ( let i=0;i<user[0].kidneys.length;i++){
     if ( user[0].kidneys[i].healthy){
        newKidneys.push({
            healthy: true
        })
     }
    }  
})

app.listen(3000);