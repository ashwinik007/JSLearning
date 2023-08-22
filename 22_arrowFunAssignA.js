
console.log(`<=----------------------------------Assignment 1-------------------------------=>`);
let arrowFun = ()=>{
    console.log(`"Good Morning,Today is Tuesday"`);
 }
 let value = arrowFun();
console.log(`---------------------------------------------------------------------------------`);

 let multiply = (num1, num2, num3) => {
    console.log(`Multiplication =`, num1*num2*num3);
}
multiply(5, 5, 2);
multiply(10, 4, 1);

console.log(`---------------------------------------------------------------------------------`);

let add = (arg1,arg2,arg3,arg4,arg5) => {
//console.log(`Addition =`,arg1+arg2+arg3+arg4+arg5);
return arg1+arg2+arg3+arg4+arg5;

}

let result = add(100,100,200,349,756);
let result1 = add("Iam ","learning ","ES6 ","features ","in depth");
console.log(`Addition = ${result}`);
console.log(`Concatation = ${result1}`);

//let string = (str1,str2,str3,str4,str5)=>{
   // return str1.concat(str2,str3,str4,str5);
   // }

//let result = string("Iam ","learning ","ES6 ","features ","in depth");

//console.log(`Concatenation String is= ${result}`);