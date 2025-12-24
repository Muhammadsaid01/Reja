console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const  http = require("http");


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

app.get('/', function(req, res) {
    res.render("harid");
});


const server  = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server successfully on port: ${PORT}`);
});
