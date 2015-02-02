var through = require('through');
var http = require('http');

var server = http.createServer(function(req,res){
    if (req.method ==='POST'){
        req.pipe(through(function(data){
            //console.log(data);
            this.emit('data',data.toString().toUpperCase());
        })).pipe(res);
    }
    else {
        res.statusCode=404;
        res.end(http.STATUS_CODES[res.statusCode]);
    }

});

server.listen(Number(process.argv[2]));
