module.exports = function (ns){
    return function(){
        var args = Array.prototype.slice.call(arguments,0);
        console.log(ns,args.join(' '));
    };
}
