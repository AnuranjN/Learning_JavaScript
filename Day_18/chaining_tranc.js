let transaction=[2000,-3500,4200,2700,-1500,3200]

let credAmount=transaction.filter(function(n){
    return n>0
}).reduce(function(acc,value){
    let totalAmount =acc+value;
    return totalAmount
},0)

console.log(credAmount)