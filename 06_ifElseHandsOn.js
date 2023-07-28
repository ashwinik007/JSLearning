console.log(`<=......................................Assignment 1.............................................=>`);
console.log(`<=......................................Step 1.............................................=>`);
function isEvenOrOddNum(num){

    var number = num
    if (num%2==0) {
        console.log(`${number} ="Even" `);
    } else {
        console.log(`${number} ="Odd" `);
    }
}
isEvenOrOddNum(45);
isEvenOrOddNum(70);
isEvenOrOddNum(67);
isEvenOrOddNum(98);
console.log(`<=......................................Step 2.............................................=>`);

function eligibilty(age){
if (age>= 18) {
    console.log(`Age is ${age} that person is eligible for voting`);
} else {
    console.log(`Age is ${age} that person is not eligible for voting`);
}

}
eligibilty(18);
eligibilty(20);
eligibilty(17);
eligibilty(40);

console.log(`<=......................................Step 3.............................................=>`);

function str(string){
var stringlength = string.length;
if (stringlength > 10) {
console.log(`${string}string length is ${stringlength}`);
    console.log(`${string} string is more than 10 character`);
} else {
    console.log(`string is not more than 10 character`);
}

}
str("JavaScript-ES6");

console.log(`<=......................................Step 4.............................................=>`);

function string(str){
    var result= str.startsWith("Java")
 
if (result==true) {
    console.log(`JavaScript Langauage is starts with Java`);
} else {   
    console.log(`JavaScript Langauage not starts with Java`);  
}
}
string("JavaScript Langauage")