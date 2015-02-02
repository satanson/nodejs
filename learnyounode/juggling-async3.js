var http = require('http');
var BufferList = require('bl');
var urls=process.argv.slice(2);
var queue=Array(3);
var n=0;

function HttpGet(i){

    var url = urls[i];
    http.get(url,function(response){
        response.pipe(BufferList(function(err,data){
            queue[i]=data.toString();
            if(++n>2){
                queue.forEach(function(e){console.log(e)})
            }
        }));
    });
}
for (var i=0;i<3;++i){
    HttpGet(i);
}
