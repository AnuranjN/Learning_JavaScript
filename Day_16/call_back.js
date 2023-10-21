function printFirstname(firstname,cb){
    console.log(firstname)
    cb('Nirmal')
}

function printLastname(lastname){
    console.log(lastname)
}

printFirstname('Anuranj',printLastname) //this is callback function



