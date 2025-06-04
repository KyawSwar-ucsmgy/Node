let fs = require("fs");
fs.unlink("test.txt", error => {
    if (error) console.log(error);
    else console.log("File successfully deleted");
});

fs.mkdir("Test", error => {
    if (error) console.log(error);
    else console.log("Making folder successful");
});