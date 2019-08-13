var fs = require("fs");
var zlib = require("zlib");

fs.createReadStream('input1.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));

console.log("App has ended");