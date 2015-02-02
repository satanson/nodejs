var http = require('http');
var bl = require('bl');
var options={};
options.host = process.argv[2];
options.port = process.argv[3];
console.log(options);
var req=http.request(options,function(res){
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data',function(chunk){
        console.log('BODY: '+chunk);
    });
});

req.end("");
