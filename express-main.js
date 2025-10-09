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
app.listen(3000);