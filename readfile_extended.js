var fs = require("fs");
var buf = new Buffer.alloc(24);

console.log("Read an existing file");

fs.open('node_foundations.txt', 'r+', function(err, fd) {

    if(err) {
        return console.error(err);
    }

    console.log("File opened");
    console.log("About to read file");

    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
        if(err) {
            console.error(err);
        }

        console.log(bytes + " bytes read");

        if(bytes > 0) {
            console.log(buf.slice(0, bytes).toString());
        }
    });
});