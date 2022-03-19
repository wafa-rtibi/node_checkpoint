//SOLUTION 1

const http=require('http')
http.createServer( (request,response)=>{
    if (request.method == 'POST') {
    var body = ''
    request.on('data', function(data) {
    body += data.toString()
    body = body.split("").map((el) => el.toUpperCase()).join('');
    })
    request.on('end', function() {
        response.writeHead(200, { "content-type": "text/plain" })
        response.end(body)
    })
}}
).listen(Number(process.argv[2]))

// SOLUTION 2

const http=require('http')
const map=require('through2-map')
const server=http.createServer((req,res)=>{
    if(req.method=='POST')
    return res.end('send me a post\n')

    req.pipe(map(el=>{
        return   el.toString().toUpperCase()
    })).pipe(res)
})
server.listen(Number(process.argv[2]))