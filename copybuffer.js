var buffer1 = new Buffer.from('ABC');
var buffer2 = new Buffer.alloc(4);

buffer1.copy(buffer2);

console.log("buffer1 content is: " + buffer1.toString());
console.log("buffer2 content is: " + buffer2.toString());

buffer1.copy(buffer2, 2);

console.log("buffer2 content is: " + buffer2.toString());

console.log("Buffer1 length: " + buffer1.length);
console.log("Buffer2 length: " + buffer2.length);

console.log("Encoding: " + Buffer.isEncoding('utf8'));
console.log("isBuffer: " + Buffer.isBuffer(buffer1));
console.log("byteLength: " + Buffer.byteLength("Hello world!"));