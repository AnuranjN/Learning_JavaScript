//using filter function to get even no from array

let array=[23,25,34,12,8,14]

let evenArr=array.filter(function(n){
    return n%2==0
})
console.log(evenArr)