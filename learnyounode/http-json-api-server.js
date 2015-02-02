var http = require('http');
var url = require('url');

var router={};
router['/api/parsetime']=function(query){
    var d=new Date(query.iso);
    var o={
        "hour":d.getHours(),
        "minute":d.getMinutes(),
        "second":d.getSeconds()
    };
    return JSON.stringify(o);
};
router['/api/unixtime']=function(query){
    var d=new Date(query.iso);
    var o={
        "unixtime":d.getTime(),
    };
    return JSON.stringify(o);
};

var server = http.createServer(function(req,res){
    //console.log(req.constructor.name);//http.IncommingMessage
    //console.log(res.constructor.name);//http.ServerResponse
    if (req.method ==='GET'){
        // 3rd arg must be true, otherwise, fail to parse query string
        var o = url.parse(req.url,true); 
        if (o.pathname in router){
            res.writeHead(200,{'Context-Type':'application/json'});
            //console.log(o.query.iso);
            res.end(router[o.pathname](o.query));
        }
        else {
            res.statusCode=404;
            res.end(http.STATUS_CODES[res.statusCode]);
        }
    }
    else{
        res.statusCode=405;
        res.end(http.STATUS_CODES[res.statusCode]);
    }
});

server.listen(Number(process.argv[2]));
