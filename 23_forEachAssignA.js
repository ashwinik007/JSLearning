console.log(`------------------------------step1----------------------`);
const arrayNumber = [1 , -7 , 40 , 502 , -77 , 91 , 0 , 108 , 89 , -601];
arrayNumber.forEach((currentValue , index) => {
    console.log(`Array Element=`,currentValue,  `   Index=`,index);
});
console.log(`---------------------------step2---------------------------`);
arrayNumber.forEach((currentValue) => {
    if (currentValue>0) {
        console.log(`Positive number is  : ${currentValue}`);
    }
});
console.log(`----------------------------step3-------------------------`);
const negativeNumber = []
arrayNumber.forEach((currentValue) => {
    if (currentValue < 0) {
        negativeNumber.push(currentValue)
        console.log(`Negative number in array is : ${negativeNumber}`);
    }
});
console.log(`------------------------------step4--------------------`);
arrayNumber.forEach((currentValue) => {
    if (currentValue%2==0) {
        console.log(`The Even number in array is : ${currentValue}`);  
    }
});
console.log(`------------------------------step5---------------------`);
let sum=0;
arrayNumber.forEach((currentValue) => {
       sum+=currentValue 
    }
    );
    console.log(`Sum of all elment in Array is : ${sum}`);
    console.log(`--------------------------step6--------------------`);
    arrayNumber.forEach((currentValue,index) => {
        if (index %2== 0) {
           console.log(`Even index in array is :${index} is ${currentValue}`);
        }     
    });
    console.log(`----------------------------------------------------------`);