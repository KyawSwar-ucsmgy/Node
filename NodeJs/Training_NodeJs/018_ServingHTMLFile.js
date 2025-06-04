let http = require("http");
let fs = require("fs");

let myReadStr = fs.createReadStream("index.html");

let server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/html'});
    myReadStr.pipe(res);
})

server.listen(3000, () => {
    console.log("Server is running at Port: 3000");
})