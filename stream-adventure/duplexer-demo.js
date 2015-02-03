var duplexer = require('./duplexer.js');

var cmd = process.argv[2];
var args = process.argv.slice(3);
duplexer(cmd,args).pipe(process.stdout);
