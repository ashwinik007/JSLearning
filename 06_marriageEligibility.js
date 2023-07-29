console.log(`<=......................................................Assignment 1.............................................=>`);

function marriageEligibility(gender,age){

if (gender=="Female" && age >= 18) {
    console.log(`Your Gender is ${gender} and your age is ${age} then you are eligible for Marraige`); 
} else if (gender== "Male" && age>=21) {
    console.log(`Your Gender is ${gender} and your age ${age} is then you are eligible for Marraige`);
} else if (gender== "other" && age == undefined ) {
    console.log(`Your Gender is ${gender} your age is ${age} invalid`); 
} else    
console.log(`Your Gender is ${gender} and your age is ${age} then you are not eligible for Marraige`);

   
}
     
marriageEligibility("Male",17);
marriageEligibility("Male",25);
marriageEligibility("Female",28);
marriageEligibility("Female",16);
marriageEligibility("Other",35);
marriageEligibility("Other",41);


console.log(`<=......................................................Assignment 2.............................................=>`);

var leapYear = function(year){
var res =+year;
if (year === null || year === undefined || year === "String") {
    console.log(`Year ${year} Invalid Input`);

} else if (year%4===0 && year%100 !==0 || year % 400 === 0 ) {
    console.log(`This year ${year} is Leap Year`);
} else {
    console.log(`This year ${year} is not Leap year.`);
}
    
}
leapYear(2020);
leapYear(1999);
leapYear(1600);
leapYear(2022);
leapYear(1945);
leapYear(null);
leapYear("Twenty Twenty");
leapYear(undefined);
leapYear(NaN);
leapYear(1750);