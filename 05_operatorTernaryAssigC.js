console.log(`<=......................................................START.......................................................=>`);
console.log(`<=......................................................Assignment 2.......................................................=>`);
console.log(`<=......................................................Step 1.......................................................=>`);
function maleMarriageEligibility(gender, age, boyNames){
 
    var result = (gender && age >= 21)? console.log(`${boyNames} you are age ${age} is so you are eligible for Marriage`) : console.log(`${boyNames} your age ${age} is so you are not eligible for Marriage`);
    
    }
    maleMarriageEligibility("Male",25,"Billgates");
 
    maleMarriageEligibility("Male",17,"Stew Jobs"); 
    
console.log(`<=......................................................Step 2.......................................................=>`);

function femaleMarrigeEligibilty(gender, age, girlName){
    var result = (gender && age >= 18)? console.log(` ${girlName} your age ${age} is so you are eligible for marriage `) : console.log(` ${girlName} your age ${age} is so you are not legible for marriage`);
}
femaleMarrigeEligibilty("Female",16,"Jennifer");
console.log(`--------------------****-------------------`);
femaleMarrigeEligibilty("Female",27,"Malinda Gates");

