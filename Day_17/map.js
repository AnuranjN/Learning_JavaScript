//squaring an array

//traditional method

const arr1=[1,2,3,4,5]
const arr2=[]

for(let i=0;i<arr1.length;i++){
    arr2.push(arr1[i]*arr1[i])
}
console.log(arr2)

//using map function

const arr3=[5,10,15,20,25]
let squaredArr=arr3.map(function(n){
    return n*n
})
console.log(squaredArr)
