let http = require("http");
let url = require("url");

let routes = {
    "GET": {
        "/" : (req, res) => {
            res.writeHead(200, {"content-type": "text/html"});
            res.end("<h1>Get method => / route </h1>");
        },
        "/index" : (req, res) => {
            res.writeHead(200, {"content-type": "text/html"});
            res.end("<h1>Get method => /index route </h1>");
        }
    },

    "POST": {
        "/" : (req, res) => {
            res.writeHead(200, {"content-type": "text/html"});
            res.end("<h1>POST method => / route </h1>");
        },
        "/index" : (req, res) => {
            res.writeHead(200, {"content-type": "text/html"});
            res.end("<h1>POST method => /index route </h1>");
        },
    },

    "NA": (req, res) => {
        res.writeHead(404);
        res.end("<h1>No Page For That Route</h1>");
    }
}
let startServer = (req, res) => {

    let urlObj = url.parse(req.url, true);
    let reqURL = req.url;
    let reqMethod = req.method;
   // routes[reqMethod][reqURL]();
  // console.log(urlObj.pathname);
  //routes[reqMethod][urlObj.pathname](req, res);
  let resolveRoute = routes[reqMethod][urlObj.pathname];
  
  if (resolveRoute != undefined && resolveRoute != null) {
    resolveRoute(req, res);
  } else {
    routes["NA"](req, res);
  }
 }
let server = http.createServer(startServer);

server.listen(2000, () => console.log("Server is running."))
