var net=require('net');
var port=process.argv[2]
var server=net.createServer(function(c){
    //console.log('client connect');
    c.on('end',function(){
        //console.log('client disconnected');
    });
    c.on('error',function(msg){
        console.log(msg);
    });
    c.setEncoding('utf8');
    c.end(now());
    c.pipe(c);
});

server.listen(port,function(){
    //console.log('server bound');
});

function now(){
    var date=new Date();
    var YYYY=date.getFullYear();
    var MM='00'+(date.getMonth()+1);
    MM=MM.substr(MM.length-2);
    var DD='00'+date.getDate();
    DD=DD.substr(DD.length-2);
    var hh=date.getHours();
    var mm=date.getMinutes();
    return ""+YYYY+"-"+MM+"-"+DD+" "+hh+":"+mm;
}
