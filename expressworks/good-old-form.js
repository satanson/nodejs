var express = require('express');
var parser = require('body-parser');
var fs = require('fs');
var through = require('through');

var app = express();
app.use(parser.urlencoded({extended:false}));
app.post('/form',function(req,res){
    res.end(req.body.str.split('').reverse().join(''));
});
app.get('/',function(req,res){
    res.setHeader("Context-Type","text/html");
    res.statusCode=200;
    //console.log(req);
    fs.createReadStream('index.html').pipe(through(function(data){
        //console.log(data);
        res.send(data.toString());
    }));
    //res.send('send some data');
});
app.listen(Number(process.argv[2]));
