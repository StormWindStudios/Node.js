var fs = require("fs");
var zlib = require("zlib");

fs.createReadStream('input.txt.gz')
    .pipe(function(content) {
        console.log(content);
    })
    .pipe(fs.createWriteStream('decompressed_output.txt'));

console.log("App has ended");