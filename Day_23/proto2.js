function person(_name,_age){
    this.name=_name
    this.age=_age

    
}
//example of prototyping
person.prototype.getName=function(){
    console.log(`My name is ${this.name} and i am of age ${this.age}`)
}

let person1=new person('Anuranj',21)
let person2=new person('Siddham',22)

console.log(person1)
console.log(person2)