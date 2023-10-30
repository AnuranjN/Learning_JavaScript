let person1={
    name:'Anuranj',
    age:21
}
console.log(person1)

function person(_name,_age){
    this.name=_name
    this.age=_age
}

let person2=new person('Anuranj',21)
console.log(person2)
