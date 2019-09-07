const express = require("express");
const PORT = 3000;
var path = require("path");


const IP = "127.0.0.1";
var parser = require('body-parser');



//Initialize the express server and
//put the server into the const app
const oma = express();

//Set oma to listen to IP:PORT and
//create a callback to show port
oma.listen(PORT, IP, () => {
    console.log(`OMA Server running on port ${PORT}`);
});

//Parse only JSON data in req body
oma.use(parser.json());

oma.use(parser.urlencoded({
    extended: false
}));

oma.use(express.static(path.join(__dirname, '/')));

//User database
users = ['a', 'b', 'c'];
pwds = ['1', '2', '3'];


oma.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
});

oma.post('/check', (req, res) => {
    if (users.includes(req.body.name)) {
        // console.log(users.includes(req.body.name));
        // console.log(i);
        if (req.body.pwd == pwds[users.indexOf(req.body.name)]) {
            // res.json({msg: "Welcome buddy :)"});
            res.send("Welcome buddy :)");
        }
        else {
            // res.json({msg: "Sorry, wrong password :("});
            res.send("Sorry, wrong password :(");
        }
    }
    else {
        res.send("Sorry, I don't know this person :(");
    }
});
