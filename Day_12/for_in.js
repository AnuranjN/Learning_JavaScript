var colors={
    primary:'Red',
    secondary:'Blue',
    teritiary:'Yellow'
}

for(color in colors){
    console.log(color +"->"+ colors[color])
}

//using for in for arrays
var arr1=['Mustang','GT40','Godzilla','Viper']

for(var car in arr1){
    console.log(car+'->'+arr1[car])
}