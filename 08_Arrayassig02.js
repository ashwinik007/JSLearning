console.log(`------------------------------------Assignment 2--------------------------`)
var arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
console.log(arrayNumbers);
console.log(`------------------------------------step1-------------------------`);
console.log(`Print the total elements available:`);
console.log(`Total number of element in array is=${arrayNumbers.length} `);
console.log(`-------------------------------------step 2-----------------------`);
console.log(`print the first and last element in arraynumber:`);
var arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
console.log(`First element:${arrayNumbers[0]}`);
console.log(`Last element:${arrayNumbers.length}`);
console.log(`-------------------------------------step3--------------------------`);
console.log(`print the third last  number in arraynumber`);
var arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
var thirdLastElement = arrayNumbers[arrayNumbers.length - 3];
console.log(`The third last element in array:${thirdLastElement} `);
console.log(`-------------------------------------step4----------------------------`);
console.log(`Print the even numbers in arraynumber:`);
var arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
for (let index = 0; index < arrayNumbers.length; index++) {
    if (arrayNumbers[index]%2===0) {
        console.log(arrayNumbers[index]);
    }
}
console.log(`---------------------------------------step5-------------------------`);
console.log(`Print the odd numbers in arraynumber: `);
var arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
for (let index = 0; index < arrayNumbers.length; index++) {
    if (arrayNumbers[index] % 2 !==0) {
      console.log(arrayNumbers[index]);  
    }
}
console.log(`------------------------------------step 6--------------------------`);
console.log(`Print the all even number position sum :`);
arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
var sum = 0;
for (let index = 0; index < arrayNumbers.length; index+=2) {
sum+=arrayNumbers[index] ;   
}
console.log(`Sum of even position number: ${sum}`);
console.log(`------------------------------------Step 7----------------------`);
console.log(`Print the all the odd position number sum:`);
arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
var sum = 0;
for (let index = 1; index < arrayNumbers.length; index+=2) {
sum+=arrayNumbers[index];    
}
console.log(`Sum of odd position numbers:${sum}`);
console.log(`-----------------------------------step8-------------------------`);
console.log(`Sum of the all elements in arraynumber:`);
arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
var sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
sum+=arrayNumbers[index];    
}
console.log(`Sum of all elements from arrayNumber:${sum}`);
console.log(`--------------------------------step9------------------------------`);
console.log(`Find the number of array in multiple of 5:`);
arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
for (let index = 0; index < arrayNumbers.length; index++) {
    if (arrayNumbers[index]%5===0) {
        console.log(`this numbers are multiple 5:${arrayNumbers[index]} `);
    }
}
console.log(`---------------------------------step10----------------------`);
console.log(`Find the Available number of this array:`);
arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
var isAvailable = arrayNumbers.includes(115);
console.log(`this number 115 is include this array:${isAvailable} `);
console.log(`-----------------------------------step 11 -----------------------`);
console.log(`Find the available number of this array:`);
var isAvailable = arrayNumbers.includes(23);
console.log(`This number 23 is include this array:${isAvailable}`);
console.log(`-----------------------------------step12---------------------`);
console.log(`Insert a number:`);
arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
arrayNumbers.splice(3,0,55,66);
console.log(arrayNumbers)
console.log(`--------------------------------step13--------------------------`);
console.log(`Delete 3 elements:`);
arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
arrayNumbers.splice(0,3);
console.log(arrayNumbers);
console.log(`-----------------------------End---------------------------`);