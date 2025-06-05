let http = require("http");
let url = require("url");
let qs = require("querystring");

require("dotenv").config();

let responder = (req, res, params) => {
      res.writeHead(200, {"content-type": "text/html"});
        res.end(params);
}

let routes = {
    "GET": {
        "/" : (req, res) => {
            let filePath = __dirname + "\\index.html";
            responder(req, res, filePath);
           
        },
        "/index" : (req, res) => {
            responder(req, res, `<h1>Get method, Path Name =>  </h1> and`);
        }, 

        "/index.html" : (req, res) => {
                       
        let filePath = __dirname + "\\index.html";
        responder(req, res, filePath);
           
        }
    },

    "POST": {
        "/" : (req, res) => {
            responder(req, res, "<h1>POST method => / route </h1>")
        },
        "/index" : (req, res) => {
            responder(req, res, "<h1>POST method => /index route </h1>")
        },
        "/api/login" : (req, res) => {
            var body = '';
            req.on('data', data => {
                body += data;
                if (body.length > 1024) {
                    res.writeHead(413, {'content-type':'text/html'})
                    res.end('File size over 1mb')
                }
            });
            req.on('end', () => {
                let query = qs.parse(body)            
                console.log("Email: ", query.email, "Password: ", query.pass);
                //console.log("The request datas are: " + body);
                res.end();

            })
        },
    },

    "NA": (req, res) => {
        responder(req, res, `<h1>No Page for that route!</h1>`)    
    }
}
let startServer = (req, res) => {
    
    let reqMethod = req.method;
    var params = url.parse(req.url, true);
    var pathname = params.pathname;
    //let reqURL = req.url;
  
   // routes[reqMethod][reqURL]();
  // console.log(urlObj.pathname);
  //routes[reqMethod][urlObj.pathname](req, res);
  //let resolveRoute = routes[reqMethod][params.pathname];
  let resolveRoute = routes[reqMethod][params.pathname];
  
  if (resolveRoute != undefined && resolveRoute != null) {
    resolveRoute(req, res);
  } else {
    routes["NA"](req, res);
  }
 }
let server = http.createServer(startServer);

server.listen(process.env.PORT, () => console.log(`Server is running ${process.env.PORT}.`))
