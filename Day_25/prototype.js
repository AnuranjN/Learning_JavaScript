class Cars{
    constructor(_name,_model,_price){
        this.name=_name
        this.model=_model
        this.price=_price
        
    }
}
Cars.prototype.getMileage=function(){
    console.log(`The car ${this.model} gives a good mileage`)
}

let car1=new Cars('Ford','Mustang',2200000)
console.log(car1)
car1.getMileage()