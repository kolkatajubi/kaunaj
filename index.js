const express = require('express');
const oma = express();
const port = 3000;
const IP = "127.0.0.1";
let path = require("path");
const parser = require('body-parser');


oma.listen(port, IP, () => console.log(`OMA listening on port ${port}!`));


//Parse JSON data in req body
oma.use(parser.json());

oma.use(parser.urlencoded({
    extended: false
}));

oma.use(express.static(path.join(__dirname, '/')));


const fs = require('fs');

let rawdata = fs.readFileSync('users.json');
let userData = JSON.parse(rawdata);
// console.log(userData);


oma.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + "/Test.html"));
});


oma.post('/signin', (req, res) => {
    if (!(req.body.name in userData)) {
        res.send("User not recognized");
    }
    else if (userData[req.body.name] == req.body.pwd) {
        res.send("OK");
        // res.sendFile(path.join(__dirname + "/main.html"));
}
    else {
        res.send("Wrong password");
}
});

oma.post('/signup', (req, res) => {
    let msg = "";
    if (!(req.body.name in userData)) {
        msg = "New user";
        if (req.body.cnfpwd == req.body.pwd) {
            userData[req.body.name] = req.body.pwd;
        }
        else if(req.body.cnfpwd !== req.body.pwd) {
            msg = "The 2 passwords do not match";
        }
    }
    else {
        msg = "User already registered";
    }
    res.send(msg);
    fs.writeFile('users.json', JSON.stringify(userData, null, 4), () => {
        console.log("User data updated");
    });
});

oma.post('/delete', (req, res) => {
    if (!(req.body.name in userData)) {
        res.send("User not registered");
    }
    else {
        res.send("Deleting user")
        delete userData[req.body.name];
        fs.writeFile('users.json', JSON.stringify(userData, null, 4), () => {
            console.log("User data updated");
        });
    }
});

