var trumpet = require('trumpet');
var fs = require('fs');
var through = require('through');

var tr = trumpet();

//var ws = tr.select('.b span').createStream();
//ws.pipe(through(function(e){
//    this.queue(e.toString().toUpperCase());
//})).pipe(ws);

tr.selectAll('.loud', function (span) {
    var stream=span.createStream();
    stream.pipe(
        through(function(e){
            //console.log(e);
            this.queue(e.toString().toUpperCase());
        })).pipe(stream);
});

process.stdin.pipe(tr).pipe(process.stdout);
