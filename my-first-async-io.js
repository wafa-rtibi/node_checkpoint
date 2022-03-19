const fs=require('fs')
let res
fs.readFile(process.argv[2],(err,data)=>{
    err? console.log('il ya une erreur') :
    res=data.toString().split('\n').length-1
    console.log(res)
})