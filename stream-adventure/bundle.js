var ws = require('websocket-stream');
var stream = ws('ws://localhost:8000');
stream.on('data',function(o){
    console.log(o.toString());
    stream.end();
});
stream.write(new Buffer("hello\n"));
//process.stdin.pipe(stream).pipe(process.stdout);
