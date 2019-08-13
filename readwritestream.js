var fs = require("fs");

var readerStream = fs.createReadStream('input1.txt');
var writerStream = fs.createWriteStream('output1.txt');

readerStream.pipe(writerStream);

console.log('App has ended');