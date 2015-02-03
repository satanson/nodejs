var through = require('through');
var duplexer = require('duplexer');

module.exports = function (counter){
    var counts={};
    var input = through(write,end);
    return duplexer(input,counter);
    function write(data){
        counts[data.country]=(counts[data.country]||0)+1;
    }

    function end(data){
        counter.setCounts(counts);
    }
}
