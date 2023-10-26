//Here we can see the sound function plays different roles for different classes

class Animal{
    sound(){
        console.log('Animal make sounds')
    }
}

class Dog{
    sound(){
        console.log('Dog Barks')
    }
}
class Cat{
    sound(){
        console.log('Cat meows')
    }
}

let animal1=new Animal()
let ben=new Dog()
let puss=new Cat()

ben.sound()
puss.sound()