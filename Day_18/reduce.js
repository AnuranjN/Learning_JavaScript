//using reduce function to give sum of array elements

let array=[23,54,46,34,87,95]

let sumArr=array.reduce(function(accu,value){
    let sumval=accu+value
    return sumval
}, 0)

console.log(sumArr)

//multiplication

let array2=[1,2,3,4,5]

let mulArrArr=array2.reduce(function(accu,value){
    let sumval1=accu*value
    return sumval1
}, 1)

console.log(mulArrArr)