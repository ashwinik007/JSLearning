
console.log(`==============================Assignement 1=============================================`);

const arrayNumbers =[20,11,40,25,37,49,9,90,60,2,19];

console.log(arrayNumbers);
console.log(`------------------------ Numbers are greater than 50 ----------------------------`);

const array = arrayNumbers.filter((currentValue)=>{

    return currentValue > 50;
})

console.log(array);

console.log(`------------------------ All Even numbers in array ----------------------------`);
const arrayEvenNumbers = arrayNumbers.filter((currentValue)=>{
    return currentValue%2==0;
});

console.log(arrayEvenNumbers);
console.log(`------------------------ All Odd numbers in array ----------------------------`);
const arrayOddNumbers = arrayNumbers.filter((currentValue)=>{
    return currentValue%2==1;
});
console.log(arrayOddNumbers);

console.log(`------------------------ All numbers are multiple of 5 ----------------------------`);

const arrayMultiple = arrayNumbers.filter((currentValue)=>{
    return currentValue%5 ==0;
});

console.log(arrayMultiple);

console.log(`------------------------ All numbers between 20 and 50 ----------------------------`);

const arr = arrayNumbers.filter((currentValue)=>{

    return currentValue >20 && currentValue <50;
});

console.log(arr);




