var http = require("http");

var options = {
    host: '127.0.0.1',
    port: 8000,
    path: '/hello.json'
}

var callback = function(response) {
    console.log("Response Code: " + response.statusCode);
    console.log("Response Message: " + response.statusMessage);
    var body = '';

    response.on('data', function(data) {
        body += data;
    });

    response.on('end', function() {
        console.log(body);
    });
}

console.log('Starting request');
var req = http.request(options, callback);
console.log('Ending request');
req.end();
