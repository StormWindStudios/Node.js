var fs = require("fs");

fs.stat('openfile.txt', function(err, stats) {
    if(err) {
        return console.error(err);
    }

    console.log(stats.isFile());
    console.log(stats.isDirectory());
    console.log(stats.isSymbolicLink());
    console.log(stats.isSocket());
    console.log(stats.size);
});

