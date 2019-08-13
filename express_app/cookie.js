var express = require("express");
var cookieParser = require("cookie-parser");

var app = express();
app.use(cookieParser());

app.get('/', function(req, res) {
    console.log(req.signedCookies);
    res.send("Cookies!");
});

var server = app.listen(8000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Server listening at http://%s:%s', host, port);
});