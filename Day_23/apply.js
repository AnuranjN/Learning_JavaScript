let person={
    name: 'Anuranj',
    age:22,
    car:'Mustang',  
}

let printOutput = function(city){
    console.log(`My name is ${this.name} and i am ${this.age} and my car is ${this.car} and i dream to live in ${city}`)
}

let person2={
    name: 'Sidham',
    age:22,
    car:'Lambhorgini',

    
}

printOutput.apply(person2,['Mumbai'])
