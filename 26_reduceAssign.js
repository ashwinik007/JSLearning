console.log(`----------------------------------Assignment 2---------------------------------------------`);
const array_numbers = [20,11,40,25,37,49,9,90,60,2,19];
 console.log(array_numbers);
console.log(`----------------------------First--------------------------`);
console.log(`------------------------------------------------------------`);
 console.log(`Sum of all numbers using reduce method`);
 const arraySums = array_numbers.reduce( (runningTotal, element) => {
    return runningTotal + element;
 });
 
console.log(arraySums);
console.log(`---------------------------------------------------------`);
console.log(`Sum of all numbers using traditional method`);

let sum = 0; 

for (const element of array_numbers) { 
    sum = sum + element; 
}

console.log(sum);

console.log(`----------------------------Second--------------------------`);
console.log(`All Numbers multiple of 5 and then sum it`);

const arraymul = array_numbers.filter((currentValue)=>{
    return currentValue % 5 == 0;
});

console.log(arraymul);

const arraySumMul = arraymul.reduce((runningTotal, element)=>{
    return runningTotal + element;
});

console.log(arraySumMul);