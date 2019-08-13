var fs = require("fs");


console.log("writing file");

fs.writeFile('delete_me.txt', 'delete me', function(err) {
    if(err) {
        return console.error(err);
    }

    fs.unlink('delete_me.txt', function(err) {
        if(err) {
            return console.error(err);
        }

        console.log('unlink file complete');
    });
});