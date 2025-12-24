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

app.get("/hello", function(req, res) {
    res.end("<h1 style='color: blue; background-color: red;'>HELO WORLD by MUHAMMADSAID</h1>");

});

app.get("/gift", function(req, res) {
    res.end("<h1 >SIz SOvgalar bolimidaiz MUHAMMADSAID</h1>");

});

const server  = http.createServer(app);

let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server successfully on port: ${PORT}`);
});
