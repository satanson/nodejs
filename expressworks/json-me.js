var express = require('express');
var stylus =  require('stylus');
var crypto =  require('crypto');
var fs = require('fs');

var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname,'public')));
app.use(stylus.middleware(path.join(__dirname, 'public')));

var filename = process.argv[3] || path.join(__dirname,'books.json');

app.put('/message/:NAME',function(req,res){
    //console.log(req.params.NAME);
    res.send(crypto.createHash('sha1')
        .update(new Date().toDateString()+req.params.NAME)
        .digest('hex'));
});
app.get('/search',function(req,res){
    //console.log(req.query);
    res.send(JSON.stringify(req.query));
});
app.all('/books',function(req,res){
    //console.log(req.path);
    fs.readFile(filename,'utf8',function(err,data){
        if (err){
            res.sendStatus(404);
        }
        else {
            res.json(JSON.parse(data.toString()));
        }
    });
});
app.listen(process.argv[2]);
