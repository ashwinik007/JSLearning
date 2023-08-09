console.log("Hello Word");
console.log("My name is Ashwini");



   

    var fact = 1;
function factorial(num){
    // 5 * 4 * 3 * 2 * 1
   if(num==1) {
    return fact;
   } else {
    fact = num * factorial(num-1); //5 * 4 * 3 * 2 * 1
    return fact;
} 
}
factorial(5);
console.log(`Factorial using recursion is: ${fact}`);


function factorial(num) {
    if (num === 0) {
       return 1; 
    } else {
       return num * factorial(num - 1);  
    }
 }
 // new//
 var result = factorial(5);
 console.log(`Factorial using recursion is: ${result}`);

 var fact = 1;
function factorial(num){
    // 5 * 4 * 3 * 2 * 1
   if(num==1 || num==0) {
    return 1;
   } else {
   return fact = num * factorial(num-1); //5 * 4 * 3 * 2 * 1
   } 
}
factorial(5);
console.log(`Factorial using recursion is: ${fact}`);
    