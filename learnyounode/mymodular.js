var fs = require('fs');
var path = require('path');
module.exports={
    filterDir:function (dir,ext,cb){
        ext = '.'+ext;
        fs.readdir(dir,function(err,list){
            if (!err) { 
                filteredList=list.filter(function(e){
                    return path.extname(e)===ext;
                });
                filteredList.forEach(function(e){
                    cb(null,e);
                });
            }
            else {
                cb(error);
            }
        });
    },

    foreachDir:function(dir,cb){
        fs.readdir(dir,function(err,list){
            if (!err){
                list.forEach(cb.bind(null,null));
            }
            else {
                cb(err);
            }
        });
    }
};
