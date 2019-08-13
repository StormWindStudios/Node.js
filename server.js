var http = require("http");
var fs = require("fs");
var url = require("url");

http.createServer(function(request, response) { 

    var pathName = url.parse(request.url).pathname.substr(1);

    console.log("Requested file " + pathName);

    if(pathName == 'hello.json') {
        console.log("JSON data requested");
        var json_data = JSON.stringify({'code': 200, 'message': 'Hello!'});
        console.log("Writing header");
        response.writeHead(200, {'Content-type': 'application/json'});
        console.log("Writing json content");
        response.write(json_data);
        response.end();
    } else {
        fs.readFile(pathName, function(err, data) {
            if(err) {

                if(err.code == 'ENOENT') {

                    var content = fs.readFileSync('404.html').toString();
                    response.writeHead(404, { 'Content-type': 'text/html'});
                    response.write(content.toString());
                    
                } else {
                    response.writeHead(500, { 'Content-type': 'text/html'})
                }
                console.error(err);
            } else {
                response.writeHead(200, { 'Content-type': 'text/html'});
                response.write(data.toString());
            }

            response.end();
        });
    }

    console.log("Response complete, ending request");
}).listen(8000);

console.log("Listening to port 8000");