
console.log(`==============================Assignement 1=============================================`);
const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];

console.log(arrayNumbers);
console.log(`----------------------------------------------------`);
const array = arrayNumbers.map((currentValue) =>{
    return currentValue + 10;
    
})
console.log(array);
console.log(`----------------------------------------------------`);
const arrayCube = arrayNumbers.map((currentValue) =>{
    return currentValue *currentValue* currentValue;
})

console.log(arrayCube);
console.log(`----------------------------------------------------`);

// const arrayindex = arrayNumbers.map((currentValue,index,array) =>{
   
const arrayindex = arrayNumbers.map((currentValue,index) =>{
  
    return currentValue + index;
})

console.log(arrayindex);