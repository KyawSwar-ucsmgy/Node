let http = require("http");
let fs = require("fs");

let server = http.createServer((req, res) => {

    let reqURL = req.url;
    if (reqURL === "/index" || reqURL === "/home" || reqURL === "/default") {
        let myReadStr = fs.createReadStream("index.html", "utf-8");
        res.writeHead(200, {"content-type": "text/html"});
        myReadStr.pipe(res);
    } else if(reqURL === "/about" || reqURL === "/ABOUT" || reqURL === "/default") {
        let myReadStr = fs.createReadStream("about.html", "utf-8");
        res.writeHead(200, {"content-type": "text/html"});
        myReadStr.pipe(res);
    } else if (reqURL === "/api/data") {

        let obj = {
            name : "mgmg", 
            age : 26,
            family : {
                father : "U Mya",
                mother : "Daw Hla",
            }
        };
        res.writeHead(200, {"content-type": "application/json"});
        res.end(JSON.stringify(obj));
    }
     else {
        res.writeHead(200, {"content-type": "text/html"});
        res.end("Something went wrong!");
    }
})

server.listen(3000, () => console.log("Server is running"));