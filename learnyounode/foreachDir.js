var dir = process.argv[2];
var mymodule = require('./mymodular.js');
mymodule.foreachDir(dir,function(err,file){
    if (!err){
        console.log(file);
    } 
    else {
        console.log("error");
    }
});
