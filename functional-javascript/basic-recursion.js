module.exports=foldl
function foldl(arr,fn,init){
    if (arr.length === 0) return init;
    var head=arr[0];
    return foldl(arr.slice(1),fn,fn(init,head));
}
function foldr(arr,fn,init){
    if (arr.length === 0) return init;
    var head=arr[0];
    return fn(foldr(arr.slice(1),fn,init),head);
}
