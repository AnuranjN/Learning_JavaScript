const transactions=[2000,-3000,6000,15000,-2500,12000]

let find=transactions.find(function(n){
    return n<0
})

console.log(find)

//to find the index
const transactions1=[2000,-3000,6000,15000,-2500,12000]

let findind=transactions1.findIndex(function(n){
    return n<0
})

console.log(findind)
