var dir = process.argv[2];
var ext = process.argv[3];
var mymodule = require('./mymodular.js');
//console.log("----foreachDir----");
//mymodule.foreachDir(dir,function(err,file){
//    if (!err){
//        console.log(file);
//    } 
//    else {
//        console.log("error");
//    }
//});
//console.log("----filterDir----");
mymodule.filterDir(dir,ext,function(err,file){
    if (!err) {
        console.log(file);
    } else{
        console.log("error");
    }
});
