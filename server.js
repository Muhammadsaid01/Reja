const  http = require("http");

const  mongodb = require("mongodb");

let db;

const connectionString = "mongodb+srv://WONDERBEK:WONDERnm04@cluster0.igngkcd.mongodb.net/reja?retryWrites=true&w=majority";

mongodb.connect( connectionString, { useNewUrlParser: true, useUnifiedTopology: true }, 
(err, client) => {
    if (err) {
        console.log("MongoDB ga ulanishda xatolik yuz berdi", err);
    }
    else {

        console.log("MongoDB ga ulanish muvaffaqiyatli amalga oshirildi");
        module.exports = client;

        const app = require("./app");
        const server  = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function() {
            console.log(`The server successfully on port: ${PORT}, http://localhost:${PORT}`);
}); 
}

}
);