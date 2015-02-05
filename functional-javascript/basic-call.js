module.exports = function(){
    var args = Array.prototype.map.call(arguments,function(x){return x});
    return args.filter(function(e){
        return Object.prototype.hasOwnProperty.call(e,'quack');
    }).length;
}
