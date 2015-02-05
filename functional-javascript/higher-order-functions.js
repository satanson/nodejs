module.exports = repeat;
function repeat(op,n){
    for(var i=0;i<n;++i)op();
}
