const fs=require('fs')
const path=require('path')

module.exports = function filtre_by_ext(dir,ext,callback) {
    fs.readdir(dir, (err,data)=>{
        if (err) {
            return callback(err);
        }
        callback(
            null,
            data.filter(el => path.extname(el.toString()) == `.${ext}`)
        );
        
    } )
}


