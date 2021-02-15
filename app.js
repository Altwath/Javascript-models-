const tutorial = require('./tutorial') // where did I get './' from? Will because I have the app file in the same location as the app file. If 
// I were to hit control+B. I can see them both in the same folder. 


console.log(tutorial.sum(1,1));// this is how to print the tutorial after saving it 
//console.log(tutorial(1,1)); //This line is how to print out the result after passing 1 + 1. 
console.log(tutorial.PI);
console.log(new tutorial.SomeMAthObject());