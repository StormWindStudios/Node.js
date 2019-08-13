var buffer1 = new Buffer.from('Buffer One');
var buffer2 = new Buffer.from('Buffer Two');
var buffer3 = new Buffer.from('Buffer Three');

var concatBuffer = Buffer.concat([buffer1, buffer2, buffer3], 5);

console.log(concatBuffer.toString());