let fs = require("fs");

let myReadStr = fs.createReadStream("readStream.txt");
let myWriteStr = fs.createWriteStream("writePipStream.txt");
 //This writing method is so fast than simple write method.
//  myReadStr.on("data", (chunk) => {
//    myWriteStr.write(chunk)
//  })
myReadStr.on("data", () => myReadStr.pipe(myWriteStr));