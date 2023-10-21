const transactions1=[2000,-3000,6000,15000,-2500,12000]

let some=transactions1.some(function(n){
    return n<0
})

console.log(some)