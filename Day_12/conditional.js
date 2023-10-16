const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the score: ', (userInput) => {
  const score = parseInt(userInput);

if(score>90){
    console.log('Student has grade A')
}
else if(score>=70 && score<=89){
    console.log('Student has grade B')
}
else if(score>=50 && score<=69){
    console.log('Student has grade C')
}
else{
    console.log('Student has failed exams')
}

rl.close();
});