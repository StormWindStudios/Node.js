var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
const multer = require("multer");
var fs = require("fs");

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'files');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname);
    }
});

var upload = multer({ storage: storage });

app.use(bodyParser.urlencoded({
    extended: false
}));


app.get('/', function(req, res) {
    console.log('GET request for /');
    res.send('Hello GET');
});

app.post('/', function(req, res) {
    console.log('POST request for /');
    res.send('Hello POST');
});

app.delete('/users/1', function(req, res) {
    console.log('DELETE request for /users/1');
    res.send('Hello DELETE');
});

app.get('/users', function(req, res) {
    console.log('GET request for /users');
    res.send('Hello GET /users');
});

app.post('/users', function(req, res) {

    console.log("BODY: " + req.body);
    response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    }

    res.end(JSON.stringify(response));
});

app.get('/process_get_register', function(req, res) {
    console.log('GET request to registration');

    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    }

    console.log("Response: " + response);
    res.end(JSON.stringify(response));
});

app.get('/ab*cd', function(req, res) {
    console.log('GET request for /ab*cd');
    res.send("Hello pattern match");
});

app.use(express.static('views'));

app.use('/static', express.static('images'));


app.post('/files', upload.single('file'), (req, res, next) => {
    const file = req.file;

    if(!file) {
        const error = new Error('No file specified, please upload one');
        error.httpStatusCode = 400
        return next(error);
    }

    res.send(file);
});

var server = app.listen(8000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Server listening at http://%s:%s', host, port);
});