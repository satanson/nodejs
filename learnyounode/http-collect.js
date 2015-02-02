var http = require('http');
var BufferList = require('bl');
var url = process.argv[2];

http.get(url,function(response){
    console.log(response.constructor.name);
    for (var p in response){
        console.log(p);
    }
    response.pipe(BufferList(function(err,data){
        //console.log(data.toString().length);
        //console.log(data.toString());
    }));
});
