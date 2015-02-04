var browserify = require('browserify');

browserify(process.argv[2]).bundle(function(err,src){
    if(err){
        console.error(err);
    }
    else{
        return src;
    }
}).pipe(process.stdout);
