const fs=require('fs')
const res = fs.readFileSync(process.argv[2], { encoding: "utf8", flag: "r" }).split("\n").length-1;
console.log(res)