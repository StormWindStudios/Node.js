var fs = require("fs");

console.log("Open a file");

fs.open('openfile.txt', 'w+', function(err, fd) {
    if(err) {
        return console.error(err);
    }

    console.log("Opened file!");
});

console.log("App ended");
