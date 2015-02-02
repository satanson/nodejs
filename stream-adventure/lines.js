var split = require('split');
var through = require('through');

var lineno=0;
process.stdin
    .pipe(split())
    .pipe(through(
                function(line){
                    var upperlower=lineno%2 !== 0 ? 
                        String.prototype.toUpperCase :
                        String.prototype.toLowerCase ;
                    console.log(upperlower.call(line.toString()));
                    ++lineno;
                },
                
                function(){
                    lineno=0;
                    this.emit('end');
                }
                )
            );
