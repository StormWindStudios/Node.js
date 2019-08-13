var fs = require('fs');

fs.readFile('hello.txt', function(err, data) {
    if(err) return console.log('error');

    console.log(data.toString());
});

console.log('Program ended');