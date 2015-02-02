var http = require('http');
var BufferList = require('bl');
var urls=process.argv.slice(2);
var queue=Array(3);
var n=0;

for (var i=0;i<3;++i){
    var url = urls[i];

    (function(i){
    http.get(url,function(response){
        response.pipe(BufferList(function(err,data){
            queue[i]=data.toString();
            if(++n>2){
                queue.forEach(function(e){console.log(e)})
            }
        }));
    });
    })(i);
    sleep(500);
}


function sleep(milliSeconds){
 var startTime = new Date().getTime(); // get the current time
 while (new Date().getTime() < startTime + milliSeconds); // h
}

