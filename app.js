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
const mongodb = require("mongodb");



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

    console.log("user entered /create-item route");
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({ reja : new_reja }, (err, data) => {
    
    console.log(data.ops);
     res.json(data.ops[0]);
    });
});

app.post('/delete-item', (req, res) => {
    const id = req.body.id;
    db.collection("plans").deleteOne({ _id: new require("mongodb").ObjectID(id) }, function(err, data) {
        res.json({state: "success"  });
    });
});

app.post('/edit-item', (req, res) => {
    const data = req.body;
    console.log(data);
    db.collection("plans").findOneAndUpdate(
        { _id: new mongodb.ObjectID(data.id) },
        { $set: { reja: data.newInput } } ,
        (err, data) => {

            res.json({state: "success"});
        });
});


app.post('/delete-all', (req, res) => {
   if(req.body.delete_all) {
        db.collection("plans").deleteMany( function(){
            res.json({state: "Hamma rejalar o'chirildi"});
        });
   }
});


app.get('/', function(req, res) {
    console.log("user entered / route");
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if(err) {
            console.log(err);
            res.end("Xatolik yuz berdi");
        } else{
            res.render("reja", { items: data  });
        }
    });
});

app.get("/author", (req, res) => {
     console.log("user entered /author route");
    res.render("author.ejs", { user : user  });
});

module.exports = app;