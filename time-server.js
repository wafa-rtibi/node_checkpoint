const net = require("net");
const port=Number(process.argv[2])
var strftime = require("strftime")

const server = net.createServer((socket)=>{
    const data = strftime("%Y-%m-%d %H:%M").toString() ;
    socket.end(data+'\n')
})
server.on('error', err=>{
    console.log(err)
})
server.listen(port)
