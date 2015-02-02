var argv=process.argv
var node=argv.shift()
var program=argv.shift()
console.log(argv.reduce(function(x,y){return +x+(+y)},0))
