var express = require("express");
var fs = require("fs");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/students', function(req, res) {
    fs.readFile( __dirname + "/" + "students.json", 'utf8', function(err, data) {
        console.log(data);
        res.end(data);
    });
});

app.post('/students', function(req, res) {
    fs.readFile( __dirname + "/" + "students.json", 'utf8', function(err, data) {
        students = JSON.parse(data);
        students.push({
            "id": students.length + 1,
            "name": req.body.name, 
            "class": req.body.class
        });

        fs.writeFile( __dirname + "/" + "students.json", JSON.stringify(students), function(err) {
            if(err) {
                console.error("An error happened");
                res.end("An error");
            }
        });

        console.log(students);
        res.end(JSON.stringify(students));
    })
});

app.get('/students/:id', function(req, res) {
    fs.readFile( __dirname + "/" + "students.json", 'utf8', function(err, data) {

        if(err) {
            res.end('ERROR!');
        }

        var students = JSON.parse(data);
        console.log(students);
        console.log(req.params.id);
        var student_info = students.find(s => s.id === parseInt(req.params.id));
        console.log(student_info);
        res.end(JSON.stringify(student_info));
    });
});

app.delete('/students/:id', function(req, res) {
    fs.readFile( __dirname + "/" + "students.json", 'utf8', function(err, data) {

        students = JSON.parse(data);

        for(var i = 0; i < students.length; i++) {
            var student = students[i];
            if(student.id === parseInt(req.params.id)) {
                students.splice(i, 1);
            }
        }

        fs.writeFile( __dirname + "/" + "students.json", JSON.stringify(students), function(err) {
            if(err) {
                console.error("An error happened");
                res.end("An error");
            }
        });

        res.end(JSON.stringify({"status": "deleted"}));
    });
});

app.use(express.static('views'));

var server = app.listen(8000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("App listening at http://%s:%s", host, port);
})