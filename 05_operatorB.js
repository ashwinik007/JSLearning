console.log("<=.................................  Assignment 2...................................=>");
console.log("<=...................................  Step 1.........................................=>");
var greaterNumber = function(num1,num2){
var result = num1 > num2 ? num1 : num2;
console.log(`Greatest Number is = ${result}`);
}

greaterNumber(10,-10);
greaterNumber(800, 899);


console.log("<=.................................... Step 2.........................................=>");

var isEvenOrOddNum = function(num){
    var res=num%2==0 ? "Even" :"Odd";
    console.log(("----------------------------------"));
    console.log(`${num} Number Is: ${res}`);
    
    }
    isEvenOrOddNum(29);
    isEvenOrOddNum(44);
    isEvenOrOddNum(0);
    isEvenOrOddNum(101);

    console.log("<=.................................... Step 3.........................................=>");

    var wordcount = function(str){
        var len=str.length;
        console.log(`Length= ${len}`);
        var res=len%2==0 ? "Even" : "Odd";
        console.log(`Result=${res}`);
    }
    wordcount("Javascript");
    wordcount("Google Chrome");
    wordcount("Developer");