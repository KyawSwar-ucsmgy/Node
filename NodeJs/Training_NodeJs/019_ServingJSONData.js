let http = require("http");
let fs = require("fs");

let server = http.createServer((req, res) => {

    res.writeHead(200, {'content-type': 'application/json'});
    let obj = {
        name : "MgMG",
        age : 26, 
        family : {
            father : "U Mya",
            mother : "Daw Hla"
        }
    }
   // res.end(JSON.stringify(obj));
   res.end(JSON.stringify(obj));
});

server.listen(3000, () => {
    console.log("Server is running");
})