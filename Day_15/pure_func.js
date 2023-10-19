//impure function
var a=4

function impureAdd(){
    console.log(a+2)
    a++
}

impureAdd(4)
impureAdd(4)
impureAdd(4)

//pure function
function pureAdd(x,a){
    return x+a
}
console.log(pureAdd(5,2))