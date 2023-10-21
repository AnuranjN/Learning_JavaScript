const isEven= (n)=>{
    return n%2==0;
}

let printEven=(evenfn,num)=>{
    const evenNos=evenfn(num)
    console.log(`The number ${num} is an even number ${evenNos}`)
}

printEven(isEven,4)
printEven(isEven,15)