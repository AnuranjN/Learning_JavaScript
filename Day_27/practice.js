function newcar(_name,_color,_model){
    this.name=_name
    this.color=_color
    this.model=_model

    this.drive=function(){
        console.log(`I am driving ${this.name} of color ${this.color}`)
    }
}

let car1=new newcar('BMW','Red','X4')

console.log(car1)
car1.drive()
