
const mymodule=require('./mymodule')
    const callback = (err, data) => {
    err
        ? console.log(err)
        : data.length == 0
        ? console.log("cette extention n'existe pas ")
        : data.forEach((element) => {
            console.log(element.toString());
        });
    };
    mymodule(process.argv[2],process.argv[3],callback)    
