console.log("Web Serverni boshlash");
const express = require("express");
const app = express();

const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf-8", (err, data) => {
    if(err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data);
    }
});

//MongoDB uchun o'rnatishlar qo'shilishi mumkin

const db = require("./server").db();



//1: KRISH code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2; Session va cookie uchun o'rnatishlar qo'shilishi mumkin



//3 BSSR VIEWS UCHUN 
app.set("views ", "views");
app.set("view engine", "ejs");


//4 Routing code

app.post('/create-item', (req, res) => {
    console.log(req.body);
    res.json({test: 'success'});
});

app.get("/author", (req, res) => {
    res.render("author.ejs", { user : user  });
});

app.get('/', function(req, res) {
    res.render("reja.ejs");
});


module.exports = app;