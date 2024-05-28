var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var m1 = require("./calc");
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",
    function(req,resp)
    {
        resp.sendFile("index.html",{root:__dirname});
    }
)

app.post("/submit-data",
    function(req,resp)
    {
        var num = parseInt(req.body.pri);
        var res = m1.checkPrime(num);
        if(res)
            {
                resp.send("Number is prime");
            }
        else
        {
            resp.send("Number is not prime");
        }
    }
)

app.listen(3001,
    function(req,resp)
    {
        console.log("Server is running on port 3001");
    }
)
