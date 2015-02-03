var fs = require('fs');
var through =require('through');
var split =require('split');
fs.createReadStream(process.argv[2])
.pipe(split())
.pipe(through(function(line){
        if (line){
            this.emit('data',JSON.stringify(JSON.parse(line)));
        }
    },
    function(){
        this.queue(null);
    }
))
.pipe(process.stdout);

