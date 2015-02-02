var fs = require('fs');
var argv=process.argv;
var node=argv.shift();
var program=argv.shift();

var content = fs.readFileSync(argv[0]).toString().split('\n');
console.log(content.length);
