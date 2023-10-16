/*var colors=['Yellow','Red','Blue','Green']

for(var color of colors){
    console.log(color)
}*/

var colors=['Yellow','Red','Blue','Green']

for(var [index,color] of colors.entries()){
    console.log(index+'->'+color)
}

