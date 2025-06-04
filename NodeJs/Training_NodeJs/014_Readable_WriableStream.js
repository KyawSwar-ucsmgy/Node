let fs = require("fs");

// let readStream = fs.createReadStream("readStream.txt");
// let writeStream = fs.createWriteStream("newStream.txt");

// readStream.on("data", chunk => {
   
//     writeStream.write("\n This is new chunk \n" + chunk)
// });

let read = fs.createReadStream("readStream.txt", "utf-8");
let write = fs.createWriteStream("newStream.txt");

//'data' ka createReadStream ka emit like tae event.
read.on("data", chunk => {
    write.write(chunk);
})
