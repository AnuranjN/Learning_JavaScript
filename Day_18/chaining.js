let people=[
    {Name:'A',Age:20,Gender:'M'},
    {Name:'B',Age:21,Gender:'F'},
    {Name:'C',Age:22,Gender:'F'},
    {Name:'D',Age:23,Gender:'M'},
    {Name:'E',Age:24,Gender:'F'},
    {Name:'F',Age:25,Gender:'M'},
    {Name:'G',Age:26,Gender:'F'},
    {Name:'H',Age:27,Gender:'M'},
    {Name:'I',Age:28,Gender:'F'}
]

let males=people.filter(function(obj){
    return obj.Gender=='M'
}).map(function(male){
    return male.Age
})


console.log(males)
