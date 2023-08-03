console.log(`-----To remove duplicate elements from array------`);
let array = [4,5,4,5,8,5,7,8,9,7,8];
console.log(array);
let uniqueArray = [];

for (let i = 0; i < array.length; i++) {
   let isDuplicate = false;

   for (let j = 0; j < uniqueArray.length; j++) {
    if (array[i] === uniqueArray[j]) {
        
   
    isDuplicate = true;
    break;
}
   }

   if (!isDuplicate){
    uniqueArray.push(array[i]);
   }
}
   console.log(uniqueArray);
    




