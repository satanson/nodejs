var through = require('through');

process.stdin.pipe(through(
            function(data){
                this.emit('data',data.toString().toUpperCase());
            },
            function(){
                this.emit('end');
            })).pipe(process.stdout);
