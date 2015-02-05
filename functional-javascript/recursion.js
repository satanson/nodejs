function getDependencies(tree){
    var deps = tree.dependencies;
    if (deps){
        var a=Object.getOwnPropertyNames(deps).map(function(e){
            return [e+'@'+deps[e].version].concat(getDependencies(deps[e]));
        }).reduce(function(xs,x){
            return x.concat(xs);
        },[]).reduce(function(stat,d){
            stat[d] = (stat[d]||0)+1;
            return stat;
        },{});
        return Object.getOwnPropertyNames(a).sort();
    }
    else{
        return [];
    }
}

module.exports = getDependencies;
