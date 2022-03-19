const http=require('http')
const fs=require('fs')
const port=Number(process.argv[2])
const path=process.argv[3]

const server=http.createServer((req,res)=>{
    res.writeHead(200, { "content-type": "text/plain" });
    // res.setEncoding("utf8")
    var readstream= fs.createReadStream(path)
    readstream.on('open',function(){
        readstream.pipe(res)
    })
    readstream.on('error',function(err){
        res.end(err)
    })
})
server.on("error", (err) => {
    console.log(err);
});
server.listen(port)