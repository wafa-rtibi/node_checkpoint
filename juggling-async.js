const http=require('http')
const bl=require('bl')
let count=0
let arr=[]

function getData(index){
  http.get(process.argv[index],response=>{
      response.pipe(bl((err,data)=>{
        if (err) {
          return console.log(err)
        }
        // arr[index-2]=data.toString()
        arr[index-2]=data.toString()
        count++
        if(count==3)
        arr.forEach(el=>console.log(el))
      }))
      
  })
}
for(let i=2;i<5;i++){
  getData(i)
}

