var fs = require('fs');
var argv=process.argv;
var node=argv.shift();
var program=argv.shift();

var content = fs.readFile(argv[0],'utf8',function(err,data){
    if (!err){
        console.log(data.split('\n').length);
    }
    else{
        console.log('error');
    }
});

