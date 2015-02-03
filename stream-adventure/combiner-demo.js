var combiner = require('./combiner.js');
var fs = require('fs');
var jsonfile = process.argv[2];
fs.createReadStream(jsonfile).pipe(combiner()).pipe(fs.createWriteStream(jsonfile+'.gz'));
