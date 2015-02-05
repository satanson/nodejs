module.exports = function(xs){
    return function(ys){
        return ys.every(function(y){
            return xs.some(function(x){return x.id === y.id})
        })
    }
}
