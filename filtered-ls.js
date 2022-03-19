const fs=require('fs')
fs.readdir(process.argv[2],(err,files)=>{
            err
            ? console.log(err)
            : files
                .filter((el) => el.endsWith(`.${process.argv[3]}`)) // path.extname === `.${process.argv[3]}`
                .forEach((el) => console.log(el));
})