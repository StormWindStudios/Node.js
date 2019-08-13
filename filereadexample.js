var fs = require("fs");

var data = fs.readFileSync('readfile.txt');
console.log(data.toString());

fs.readFile('readfile.txt', function(err, data) {
    if(err) {
        return console.error(err);
    }
    console.log("Async read: " + data.toString());
});




console.log("App ended");

