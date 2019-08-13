var events = require('events');
var eventEmitter = new events.EventEmitter();


var connectionHandler = function connected() {
    console.log('connected');
    eventEmitter.emit('data_received');
}

eventEmitter.on('connection', connectionHandler);

eventEmitter.on('data_received', function() {
    console.log('data received');
});

eventEmitter.emit('connection');

console.log('Progam ended');