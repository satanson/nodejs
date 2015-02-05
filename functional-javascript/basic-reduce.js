module.exports = function(words){
    return words.reduce(function(stat,w){
        stat[w] = (stat[w]||0)+1;
        return stat;
    },
    {});
}
