var http = require("http");

http.createServer(function(request, response) {
    console.log('Got new request: ' + request);
    response.writeHead(200, {'Hello-Header': 'Hello, StormWind!'});
    response.end('Hello, world!\n');
}).listen(8081);

console.log('Server running on port 8081');