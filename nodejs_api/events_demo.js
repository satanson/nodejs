var EventEmitter= require('events').EventEmitter;
var emitter=new EventEmitter();

emitter.on('ok',function(msg){
    console.log("recv: "+msg);
});

emitter.emit('ok',"foobar");
