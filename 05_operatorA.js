console.log(`<=..........................................Assignment 1.................................................=>`);
console.log(`<=..........................................Step1.................................................=>`);

function squareOfWordLength(num){
    var numResult  = num.length;
    console.log(`Total number of words in the string: ${numResult}`);
    var square =numResult*numResult;
    return square;
}
var result = squareOfWordLength("JavaScript");
console.log(`Square of the number is: ${result}`);
var result =squareOfWordLength("Google Chrome");
console.log(`Square of the number is: ${result}`);
var result =squareOfWordLength("Developer Smart");
console.log(`Square of the number is: ${result}`);

console.log(`<=..........................................Step2.................................................=>`);

var result = function(){
    
    var string = "I am Angular Developer"
    var length = string.length;
    console.log(`Length is = ${length}`);
    var words = string.split(" ").length;
    console.log(`Total number of words = ${words}`);
    var division = length/words;
    console.log(`Division = ${division}`);
    var multiplication = length*words;
    console.log(`Multiplication = ${multiplication}`);
}
   result();





 
