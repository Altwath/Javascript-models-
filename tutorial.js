const sum =(num1,num2)=> num1+num2; //now that I am using the sum funtion I need to expose it to the real world and state that it
 //is ready to be used by writing the function in the third line using expert
  // Now the funtion is available to be used I need to tell app file where this function is located 

 const PI = 3.14; // this is how to define a variable 

 class SomeMAthObject{
     constructor(){
         console.log('object created');
     }
 }
 module.exports= sum;
 
 module.exports.sum=sum;
 module.exports.PI=PI;
 module.exports.SomeMAthObject=SomeMAthObject; //Line 4-11 are used to be exposed to the real world using lines 13-15 
