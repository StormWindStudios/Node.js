var fs = require("fs");


console.log('creating dir');

fs.mkdir('notes', function(err) {
    if(err) {
        if(err.code != 'EEXIST') {
            return console.error(err);
        }
    }

    console.log("directory created");
    console.log("now reading dir");

    fs.readdir('notes', function(err, files) {
        if(err) {
            return console.error(err);
        }

        files.forEach(function(file) {
            fs.unlink("notes/"+file, function(err) {
                if(err) {
                    console.error(err);
                }

                console.log("file " + file +" removed");
            })
        });

        fs.rmdir('notes', function(err) {
            if(err) {
                console.error(err);
            }
    
            console.log("dir deleted");
        });
    });
});