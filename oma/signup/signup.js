const express = require("express");
const app= express();
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
oma.use(parser.json());

oma.use(parser.urlencoded({
    extended: false
}));

//User database
users = ['a', 'b', 'c'];
pwds = ['1', '2', '3'];

oma.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
});
oma.post('/submit', (req, res) => {
    
    // var a=[];
    // var pass=[];
    if (users.includes(req.body.name)) {
        res.send("Username taken,choose another user name");
    }
    
    else{
        users.push(req.body.name);
        pwds.push(req.body.pass);
        console.log(users, pwds);
    }


});
