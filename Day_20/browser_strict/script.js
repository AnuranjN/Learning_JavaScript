'use strict'

//console.log(this)

//function myfnc(){
//    console.log(this)
//}
//
//myfnc()

//   let myObj={
//    Name:'Anuranj',
//    Age:20,
//    fnc1:function(){
//        console.log(this.Name)
//    }    
//}
//myObj.fnc1()

myObj2={
    Name:'Ford',
    Model:'Mustang',
    fnc2: function(){
        function fnc3(){
            console.log(this)
        }
        fnc3()
    }
}
myObj2.fnc2()