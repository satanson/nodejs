var http = require('http');

var options = {};
options.host = process.argv[2];
options.port = process.argv[3];
options.method = 'POST';

process.stdin.on('readable',function(){
    var chunk = process.stdin.read();
    if (chunk !== null){
        var req = http.request(options,function(res){
            res.on('data',function(chunk){
                console.log(chunk.toString());
            });
        });
        req.end(chunk.toString().toUpperCase());
    }
});
process.stdin.on('end',function(){
    process.exit(0);
});
