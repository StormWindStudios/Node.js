var fs = require("fs");

console.log("About to write file");

var data = 'Welcome to the StormWind Node Foundations course';

fs.writeFile('node_foundations.txt', data, function(err) {

    if(err) {
        console.error(err);
    }

    console.log("Data write complete");
    console.log("Reading file");

    fs.readFile('node_foundations.txt', function(err, data) {
        if(err) {
            console.error(err);
        }

        console.log('Async read: ' + data);
    });
});