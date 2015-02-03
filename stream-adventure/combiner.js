var combine = require('stream-combiner');
var split = require('split');
var through = require('through');
var zlib = require('zlib');
module.exports = function(){
    var genres=[];
    return combine(
            split(),
            through(
                function(data){
                    if (!data) return;
                    var record = JSON.parse(data.toString());
                    if (record.type === 'genre'){
                        genres.push({name:record.name,books:[]});
                    }
                    else if (record.type === 'book'){
                        genres[genres.length-1].books.push(record.name);
                    }
                    else {
                        throw new Error('illegal json schema');
                    }
                },
                function(){
                    this.queue(genres.map(JSON.stringify).join("\n")+"\n");
                    this.queue(null);
                }),
            zlib.createGzip()
            );
}
