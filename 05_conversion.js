console.log(`-------------------------------------- Assignment 1 -------------------------------------------------------------`);
console.log(`-------------------------- Implicit conversion to String --------------------------`);
var result = '3' + 2;
console.log(`String is : ${result}`);
console.log(`Type of Result is : ${typeof result}`);
console.log(`Their is implicit conversion + oprator to concatenate the string from number value to string, Result is string: 32`);
console.log(`--------------------------------------------------------------`);

var result = '3' + true;
console.log(`String is : ${result}`);
console.log(`Type of Result is : ${typeof result}`);
console.log(`Their is implicit conversion + oprator to concatenate the string from boolean value True to string 'true', Result is string: 3true`);

console.log(`--------------------------------------------------------------`);

var result = '3' + undefined;
console.log(`String is : ${result}`);
console.log(`Type of Result is : ${typeof result}`);
console.log(`Their is implicit conversion + oprator to concatenate the string from boolean value True to string 'true', Result is string: 3undefined`);

console.log(`--------------------------------------------------------------`);
var result = '3' + null;
console.log(`String is : ${result}`);
console.log(`Type of Result is : ${typeof result}`);
console.log(`Their is implicit conversion + oprator to concatenate from boolean value True to string 'true', Result is string: 3null`);
console.log(`=================================================================================================================================`);
console.log(`-------------------------- Implicit conversion Boolean to Number --------------------------`);

var result = '4' - true;
console.log(`Result is : ${result}`);
console.log(`Type of Result is : ${typeof result}`);
console.log(`Their is Double implicit conversion - oprator to converted from the string to number value 4 and True boolean from number Result is 4-1=3`);
console.log(`--------------------------------------------------------------`);
var result = 4 + true;
console.log(`Result is : ${result}`);
console.log(`Type of Result is : ${typeof result}`);
console.log(`Their is implicit conversion + oprator to converted from the True boolean to number Result is 4+1=5`);
console.log(`--------------------------------------------------------------`);
var result = 4 + false;
console.log(`Result is : ${result}`);
console.log(`Type of Result is : ${typeof result}`);
console.log(`Their is implicit conversion + oprator to converted from the False boolean to number Result is 4+0=4`);
console.log(`--------------------------------------------------------------`);

console.log(`-------------------------- Implicit string conversion to Number --------------------------`);
var result = '4'- '2';
console.log(`Result is : ${result}`);
console.log(`Type of Result is : ${typeof result}`);
console.log(`Their is implicit conversion - oprator to converted from the string to number value, Result is : 4-2=2`);
console.log(`----------------------------------------------------------- ---`);

var result = '4'- 2;
console.log(`Result is : ${result}`);
console.log(`Type of Result is : ${typeof result}`);
console.log(`Their is implicit conversion - oprator to converted from the string to number value, Result is : 4-2=2`);
console.log(`----------------------------------------------------------- ---`);

var result = '4'* 2;
console.log(`Result is : ${result}`);
console.log(`Type of Result is : ${typeof result}`);
console.log(`Their is implicit conversion * oprator to converted from the string to number value, Result is : 4*2=8`);
console.log(`----------------------------------------------------------- ---`);

var result = '4'/ 2;
console.log(`Result is : ${result}`);
console.log(`Type of Result is : ${typeof result}`);
console.log(`Their is implicit conversion / oprator to converted from the string to number value, Result is : 4/2=2`);




