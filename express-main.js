
const express = require("express");

const app = express();
function sum(a,b)
{
    return a + b;
}

app.get("/",function(req,res){
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    const ans = sum(a,b);
    res.send("hi there! Your answer is "+ ans);
})
app.listen(3000);