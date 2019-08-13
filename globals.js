

console.log("Filename: " + __filename);
console.log("Directory: " + __dirname);

function printHello() {
    console.log("Hello");
}

function repeatHello() {
    console.log("Repeated hello");
}

var timer = setTimeout(printHello, 2000);
clearTimeout(timer);

setInterval(repeatHello, 2000);
