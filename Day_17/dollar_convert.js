const transactions=[2000,-3000,6000,15000,-4500,12000]
const dollar=80

let trans=transactions.map(function(n){
    return (n/dollar).toFixed(0)
})

console.log(trans)