module.exports = function(arr,fn){
    return arr.reduce(function(xs,x){
        xs.push(fn(x));
        return xs;
    },[]);
}
