// 5! = 1 * 2 * 3 * 4 * 5

let result = 1; // 3 
for (let index = 1; index <= 5; index++) {
    result = result * index;
}

console.log(`Factorial of 5 is ${result}`);

console.log(`Assignment:  WAP to find the factorial of numbers: 5, 9, 11, 7`);

var fact = 1;
function factorial(num){


    
   if(num==1 || num==0) {
    return 1;
   } else {
   return fact = num * factorial(num-1); 
   
   }
   
}
let fact5 = factorial(5);
console.log(`Factorial using recursion is: ${fact5}`);
let fact9 = factorial(9);
console.log(`Factorial using recursion is: ${fact9}`);
let fact11 = factorial(11);
console.log(`Factorial using recursion is: ${fact11}`);
let fact7 = factorial(7);
console.log(`Factorial using recursion is: ${fact7}`);

    
    



