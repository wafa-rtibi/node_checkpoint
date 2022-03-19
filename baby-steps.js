const res = 
    process.argv
    .slice(2)
    .reduce((previousValue, currentValue) => Number(previousValue)+Number(currentValue),0);
console.log(res)
