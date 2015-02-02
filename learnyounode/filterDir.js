var dir = process.argv[2];
var ext = process.argv[3];
var mymodule = require('./mymodular.js');
mymodule.filterDir(dir,ext,function(err,file){
    if (!err) {
        console.log(file);
    } else{
        console.log("error");
    }
});

