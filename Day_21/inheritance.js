class Person{
    constructor(_name,_age){
        this.name=_name
        this.age=_age
    }
}

class Teacher extends Person{
    constructor(_name,_age,_subject){
        super(_name,_age)
        this.subject=_subject
    }
}

class Student extends Person{
    constructor(_name,_age,_marks){
        super(_name,_age)
        this.marks=_marks
    }
}

let teacher1=new Teacher('Saritha',46,'English')
let student1=new Student('Siddham',22,96)

console.log(teacher1)
console.log(student1)