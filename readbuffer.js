buffer = new Buffer.alloc(26);

for(var i = 0; i < 26; i++) {
    buffer[i] = i + 97;
}

var json = buffer.toJSON(buffer);

console.log(buffer.toString('ascii'));
console.log(buffer.toString('ascii', 0, 5));
console.log(buffer.toString('utf8', 0, 5));
console.log(buffer.toString(undefined, 0, 5));
console.log(json);
