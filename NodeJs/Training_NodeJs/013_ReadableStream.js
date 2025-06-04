let fs = require("fs");
// let myReadableStr = fs.createReadStream("readStream.txt", "utf-8");
// myReadableStr.on("data", chunk => {
//      console.log("We got buffer chunk!");
//     console.log(chunk);
   
// })

//let myReadableStream = fs.createReadStream("readStream.txt");
let myReadableStream = fs.createReadStream("readStream.txt", "utf-8")
myReadableStream.on("data", chunk => {
    console.log("We got buffer chunk!");
    console.log(chunk);
} )
