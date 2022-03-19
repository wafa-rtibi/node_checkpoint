// SOLUTION 1
const http = require("http");
var body=''
http.get(process.argv[2],response=>{
    response.on('error',err=>{
        return console.log(err)
    })
    response.on('data',data=>{
        body=body+data.toString()
    })
    response.on('end',()=>{
        console.log(body.length)
        console.log(body)
    })
})
//SOLUTION 2
const http=require('http')
const bl=require('bl')
http.get(process.argv[2],response=>{
    response.pipe(bl((err,data)=>{
        if (err) {
            console.log(err)
        }
        data=data.toString()
        console.log(data.length)
        console.log(data)
    }))
})