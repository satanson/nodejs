function fibA(){
    var a=[0,1];
    return function(){
        a.splice(0,2,a[1],a[0]+a[1]);
        return a[0];
    };
}
/*
function fibB(){
    let a=[0,1];
    return function(){
        a.splice(0,2,a[1],a[0]+a[1]);
        return a[0];
    };
}
*/
fa=fibA();
//fb=fibB();

for(var i=0;i<10;++i){
    console.log("fibA=",fa());
    //console.log("fibB=",fb());
}
