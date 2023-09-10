
console.log(`-------------------------------------Assignment2--------------------------------------------------`);
const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45];

console.log(`-------------------------------------Reverse the array ------------------------------------`);

console.log(`Original array is : ${arrayRollNumbers}`);

arrayRollNumbers.reverse(); 
console.log(`Reverse array is : ${arrayRollNumbers}`); 
console.log(`------------------------------------- Using Sort method -------------------------------------`);
arrayRollNumbers.sort();
console.log(arrayRollNumbers);
console.log(`-------------------------------------Sort Array in Ascending order ---------------------------`);
arrayRollNumbers.sort((n1 , n2)=>{
    return n1 > n2 ? 1 : -1; 
});

console.log(arrayRollNumbers);
console.log(`-------------------------------------Greatest number from the array ---------------------------`);
arrayRollNumbers.sort((n1,n2)=>{
return n1 > n2 ? 1 : -1;
});
const largestNumber = arrayRollNumbers[arrayRollNumbers.length-1];
console.log(`Largest number in array is : ${largestNumber}`);
console.log(`------------------------------------Smallest number from the array------------------------------`);
arrayRollNumbers.sort((n1,n2)=>{
    return n1 < n2 ? 1 : 0;
})
const smallestNumber = arrayRollNumbers[0];
console.log(`Smallest number in array is : ${smallestNumber}`);
console.log(`-------------------------------------Remove duplicates form array ------------------------------`);
const duplicate = [];
for (const element of arrayRollNumbers) {
    if (!duplicate.includes(element)) {
            duplicate.push(element)
    }
}
console.log(`This is the duplicate element in array is : ${duplicate}`);
