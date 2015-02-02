var host=process.argv[2];
var port=process.argv[3];

var net=require('net');
var bl=require('bl');

var client=net.createConnection(port,host,function(){
    //console.log(client.constructor.name);
    //for(var p in client){console.log(p);}
    client.setEncoding('utf8');
    client.pipe(bl(function(err,data){
        console.log(data.toString());
    }));
});
