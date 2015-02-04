var tar = require('tar');
var crypto = require('crypto');
var through = require('through');
var zlib = require('zlib');

//var EventEmitter=require('events').EventEmitter;
//var emitter = new EventEmitter();
//emitter.setMaxListeners(20);

var parser = tar.Parse();
parser.setMaxListeners(0);
parser.on('entry',function(e){
    //console.log(e);
    if (e.type === 'File'){
        e.pipe(crypto.createHash('md5',{encoding:'hex'}))
         .pipe(through(function(md5){
             this.queue(md5.toString()+' '+e.path+"\n");
          }))
         .pipe(process.stdout);
    }
});
parser.removeAllListeners('exit');
//console.log(process.argv[2]);
//console.log(process.argv[3]);
process.stdin
.pipe(crypto.createDecipher(process.argv[2],process.argv[3]))
.pipe(zlib.createGunzip())
.pipe(parser);
