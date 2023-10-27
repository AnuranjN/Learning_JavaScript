let person={
    name: 'Anuranj',
    age:22,
    car:'Mustang',  
}

let printOutput = function(){
    console.log(`My name is ${this.name} and i am ${this.age} and my car is ${this.car}`)
}

let person2={
    name: 'Sidham',
    age:22,
    car:'Lambhorgini',

    
}

printOutput.call(person2)
