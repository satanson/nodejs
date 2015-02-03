var websocket = require('websocket-stream');
var http = require('http');
var through = require('through');

var HTTPServer = http.createServer();
var wss = websocket.createServer({server: HTTPServer}, handle);
HTTPServer.listen(process.argv[2],function(){
    //console.log("uppercase-server is running...");
});

function handle(stream) {
    
    //console.log("echo something!");
    stream.pipe(
          through(function(data){
              this.emit('data',data.toString().toUpperCase());
          })).pipe(stream);
}
