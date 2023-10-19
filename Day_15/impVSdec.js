//find if square of a number is even

//imperative way

/*const a=4
let square=a*a
let isEven

if(square%2 ==0){
    isEven = true 
}
else{
    isEven = false 
}

*/

//declarative way
let isEven = (x)=> (x*x) %2 ===0 ?true : false
console.log(isEven(4))