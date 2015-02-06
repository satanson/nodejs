var express = require('express');
var stylus =  require('stylus');
var crypto =  require('crypto');
var path = require('path');
var app = express();

app.use(express.static(process.argv[3]||path.join(__dirname,'public')));
app.use(stylus.middleware(process.argv[3]||path.join(__dirname, 'public')));
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
app.listen(process.argv[2]);
