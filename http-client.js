const http=require('http')
const callback=(response)=>{
        response.setEncoding("utf8");
        response.on("error", function (error) {
            console.log(error.message);
        });
        response.on("data", function (data) {
            console.log(data)
        });

}
http.get(process.argv[2], callback).on("error", console.error);
