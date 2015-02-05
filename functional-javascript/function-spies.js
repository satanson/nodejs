module.exports = function(target,method){
    var wrapped=target[method];
    var spy={count:0}
    target[method]=function(){
        ++spy.count;
        return wrapped.apply(target,arguments);
    }
    return spy;
}
