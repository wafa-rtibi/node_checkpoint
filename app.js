// import local module
// const calcul=require('./localModule')

//import core module , exemple : fs
// const fs=require('fs')
// console.log(fs)
// console.log("starting...") // step 1

// fs.readFile("./file.txt",(err,data)=>{
//     err? console.log(err) :
//     console.log(data.toString())
// }) // step 2

// let data = fs.readFileSync("./file.txt")
// console.log(data.toString())
// console.log("finishing..") // step 3

// require 3rd party module
// const express=require('express')
// const hello = require("wafart_hello_package");
// console.log(hello('hello'))
// creation server 
const http=require('http')

http.createServer((req,res)=>{
    res.writeHead(200, { "content-type": "text/plain" });
    res.end('hello')                               
}).listen(5600)