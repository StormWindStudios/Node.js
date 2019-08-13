var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1() {
    console.log("listener1 triggered");
}

var listener2 = function listener2() {
    console.log("listener2 triggered");
}

eventEmitter.on('newListener', function() {
    console.log("listener added");
});

eventEmitter.on('removeListener', function() {
    console.log("listener removed");
});

eventEmitter.on('node_course_started', listener1);
eventEmitter.on('node_course_started', listener2);

eventEmitter.emit('node_course_started');

var current_listeners = eventEmitter.listeners('node_course_started');
console.log(current_listeners);

eventEmitter.removeListener('node_course_started', listener2);
 
console.log(eventEmitter.listeners('node_course_started'));