var dir = process.argv[2];
var ext = '.'+process.argv[3];
var fs = require('fs');
var path = require('path');
fs.readdir(dir,function(err,list){
    if (!err) { 
        list.filter(function(e){
            //return RegExp('\.'+ext+'$').test(e);
            return path.extname(e)===ext;
        }).forEach(function(e){
            console.log(e);
        });
    }
    else {
    }
});
