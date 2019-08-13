var fs = require("fs");
var data = 'StormWind Node course!';

var writerStream = fs.createWriteStream('output1.txt');

writerStream.write(data, 'UTF8');

writerStream.end();

writerStream.on('finish', function() {
    console.log('Completed write');
});

writerStream.on('error', function(err) {
    console.log(err.stack);
});

console.log('App has ended');