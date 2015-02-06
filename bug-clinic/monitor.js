var bunyan = require('bunyan');
var path = require('path');
var log = bunyan.createLogger({name:"sample"});

var scenario = require(path.resolve(process.cwd(),process.argv[2]));

scenario(log,function(value){
    log.info("value at finish is ",value);
})
