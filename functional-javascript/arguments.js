(function(a){
    console.log(arguments.length);
    console.log(arguments.constructor.name);
    
    for (key in arguments){
        console.log(key+": "+arguments[key]);
    }
    arguments.constructor.prototype=Array.prototype;
    var args=Array.prototype.map.call(arguments,function(e){return e});
    args.map(function(e){console.log(e)});
    console.log(arguments.callee);
    console.log(arguments.callee.caller);
})(1,2,3,4);
